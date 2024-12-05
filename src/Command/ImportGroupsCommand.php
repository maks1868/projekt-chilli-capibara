<?php
// src/Command/ImportGroupsCommand.php

namespace App\Command;

use App\Entity\Group;
use App\Repository\GroupRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\HttpClient\HttpClient;

#[AsCommand(
    name: 'app:import-groups'
)]
class ImportGroupsCommand extends Command
{
    private EntityManagerInterface $entityManager;
    private GroupRepository $groupRepository;

    private const BATCH_SIZE = 100;

    public function __construct(EntityManagerInterface $entityManager, GroupRepository $groupRepository)
    {
        parent::__construct();

        $this->entityManager = $entityManager;
        $this->groupRepository = $groupRepository;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        ini_set('memory_limit', '256M');

        $url = 'https://plan.zut.edu.pl/schedule.php?kind=group&query=+';

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
                $groupName = $item['item'];

                $existingGroup = $this->groupRepository->findOneBy(['name' => $groupName]);

                if ($existingGroup) {
                    $output->writeln("<comment>Group '{$groupName}' already exists</comment>");
                    continue;
                }

                $group = new Group();
                $group->setName($groupName);
                $this->entityManager->persist($group);

                $output->writeln("<info>Imported group: {$groupName}</info>");

                $batch_counter++;

                if ($batch_counter % self::BATCH_SIZE === 0) {
                    $this->entityManager->flush();
                    $this->entityManager->clear();
                    $output->writeln("<info>Processed {$batch_counter} groups</info>");
                }
            }

            $this->entityManager->flush();
            $this->entityManager->commit();

            $output->writeln('<info>All groups imported successfully</info>');
            return Command::SUCCESS;
        } catch (\Exception $e) {
            $this->entityManager->rollback();
            $output->writeln('<error>Failed to import groups: ' . $e->getMessage() . '</error>');
            return Command::FAILURE;
        }
    }
}
