<?php
// src/Command/ImportRoomsCommand.php

namespace App\Command;

use App\Entity\Department;
use App\Entity\Room;
use App\Repository\DepartmentRepository;
use App\Repository\RoomRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\HttpClient\HttpClient;

#[AsCommand(
    name: 'app:import-rooms',
    description: 'Import rooms from the API endpoint into the database'
)]
class ImportRoomsCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private RoomRepository $roomRepository;
    private DepartmentRepository $departmentRepository;

    // Cache to store department names
    private array $departmentCache = [];

    // Cache to store cleaned room names within the current batch
    private array $cleanRoomNameCache = [];

    private const BATCH_SIZE = 100;

    public function __construct(
        EntityManagerInterface $entityManager,
        RoomRepository $roomRepository,
        DepartmentRepository $departmentRepository
    ) {
        parent::__construct();

        $this->entityManager = $entityManager;
        $this->roomRepository = $roomRepository;
        $this->departmentRepository = $departmentRepository;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '256M');

        $url = 'https://plan.zut.edu.pl/schedule.php?kind=room&query=+';

        $httpClient = HttpClient::create();
        $response = $httpClient->request('GET', $url);

        if ($response->getStatusCode() !== 200) {
            $output->writeln('<error>Failed to fetch data</error>');
            return Command::FAILURE;
        }

        $data = $response->toArray();

        $this->entityManager->beginTransaction();

        try {
            $batch_counter = 0;

            foreach ($data as $item) {
                $roomName = $item['item'] ?? null;

                if (!$roomName) {
                    $output->writeln('<comment>Skipping an entry with no room name.</comment>');
                    continue;
                }

                $departmentName = $this->getDepartmentName($roomName);
                if (!$departmentName) {
                    $output->writeln("<comment>Could not extract department from room '{$roomName}'</comment>");
                    continue;
                }

                $department = $this->getOrCreateDepartment($departmentName, $output);
                if (!$department) {
                    $output->writeln("<comment>Failed to get or create department '{$departmentName}' for room '{$roomName}'</comment>");
                    continue;
                }

                // Remove department name from room name
                $name_array = explode(' ', $roomName);
                array_shift($name_array);
                $cleanRoomName = implode(' ', $name_array);

                // Check if the cleanRoomName has already been processed in the current batch
                if (isset($this->cleanRoomNameCache[$cleanRoomName])) {
                    $output->writeln("<comment>Room '{$cleanRoomName}' has already been processed in this batch. Skipping.</comment>");
                    continue;
                }

                // Check if room already exists in the database
                $existingRoom = $this->roomRepository->findOneBy(['name' => $cleanRoomName]);
                if ($existingRoom) {
                    $output->writeln("<comment>Room '{$cleanRoomName}' already exists in the database. Skipping.</comment>");
                    continue;
                }

                $room = new Room();
                $room->setName($cleanRoomName);
                $room->setDepartment($department);
                $this->entityManager->persist($room);

                $output->writeln("<info>Imported room: {$cleanRoomName} (Department: {$departmentName})</info>");

                $this->cleanRoomNameCache[$cleanRoomName] = true;

                $batch_counter++;

                if ($batch_counter % self::BATCH_SIZE === 0) {
                    $this->entityManager->flush();
                    $this->entityManager->clear();

                    // Reset caches since EntityManager is cleared
                    $this->cleanRoomNameCache = [];

                    $output->writeln("<info>Processed {$batch_counter} rooms</info>");
                }
            }

            $this->entityManager->flush();
            $this->entityManager->commit();

            $output->writeln('<info>All rooms imported successfully.</info>');
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $this->entityManager->rollback();
            $output->writeln('<error>Failed to import rooms: ' . $e->getMessage() . '</error>');
            return Command::FAILURE;
        }
    }

    private function getDepartmentName(string $roomName): ?string
    {
        $trimmedRoomName = trim($roomName);
        if (empty($trimmedRoomName)) {
            return null;
        }

        $parts = explode(' ', $trimmedRoomName);
        $departmentName = strtoupper($parts[0]);

        $array = explode('_', $departmentName);
        $array = array_map(function($element) {
            return preg_replace('/[\d_-]+/', '', $element);
        }, $array);

        foreach ($array as $item) {
            if ($item !== '') {
                $departmentName = $item;
                break;
            }
        }

        return $departmentName;
    }

    private function getOrCreateDepartment(string $name, OutputInterface $output): ?Department
    {
        $name = strtoupper($name);

        // If we have the department name in the departmentCache, we know we've handled it before
        // but since we may have cleared the EM, we must always refetch from DB
        if (in_array($name, $this->departmentCache, true)) {
            $department = $this->departmentRepository->findOneBy(['name' => $name]);
            if ($department) {
                return $department;
            }
            // If we didn't find it in DB, it means we created it before flushing.
            // But we flush after each department creation now, so this scenario should not occur.
        }

        // Try to find the department in the database
        $department = $this->departmentRepository->findOneBy(['name' => $name]);
        if ($department) {
            $this->departmentCache[] = $name;
            return $department;
        }

        // Create a new Department if it doesn't exist
        $department = new Department();
        $department->setName($name);
        $this->entityManager->persist($department);

        // Immediately flush to ensure the department is in DB
        $this->entityManager->flush();
        // After flush, the EM still holds the department as managed, no need to clear right now.

        $output->writeln("<info>Created new department: {$name}</info>");

        $this->departmentCache[] = $name;

        return $department;
    }
}
