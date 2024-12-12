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
    name: 'app:import-rooms'
)]
class ImportRoomsCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private RoomRepository $roomRepository;
    private DepartmentRepository $departmentRepository;

    private array $departmentCache = [];

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
                $roomName = $item['item'];

                $existingRoom = $this->roomRepository->findOneBy(['name' => $roomName]);

                if ($existingRoom) {
                    $output->writeln("<comment>Room '{$roomName}' already exists</comment>");
                    continue;
                }

                $departmentName = $this->getDepartmentName($roomName);

                if (!$departmentName) {
                    $output->writeln("<comment>Could not extract department from room '{$roomName}'</comment>");
                    continue;
                }

                $department = $this->getDepartment($departmentName, $output);

                $name_array = explode(' ', $roomName);
                array_shift($name_array);
                $roomName = implode(' ', $name_array);

                $room = new Room();
                $room->setName($roomName);
                $room->setDepartment($department);
                $this->entityManager->persist($room);

                $output->writeln("<info>Imported room: {$roomName} (Department: {$departmentName})</info>");

                $batch_counter++;

                if ($batch_counter % self::BATCH_SIZE === 0) {
                    $this->entityManager->flush();
                    $this->entityManager->clear();
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

        return strtoupper($parts[0]);
    }

    private function getDepartment(string $name, OutputInterface $output): Department
    {
        // split department name by '_'
        $array = explode('_', $name);

        // remove all numbers and underscores from string array
        $array = array_map(function($element) {
            return preg_replace('/[\d_]+/', '', $element);
        }, $array);

        foreach($array as $item) {
            if($item !== '')
                $name = $item;
        }

        $output->writeln("<info>Department {$name} being processed</info>");

        if (isset($this->departmentCache[$name])) {
            return $this->departmentCache[$name];
        }

        $department = $this->departmentRepository->findOneBy(['name' => $name]);

        if (!$department) {
            $department = new Department();
            $department->setName($name);
            $this->entityManager->persist($department);
        }

        $this->departmentCache[$name] = $department;

        return $department;
    }

}
