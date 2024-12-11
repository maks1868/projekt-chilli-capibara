<?php

namespace App\DataFixtures;

use App\Entity\Teacher;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        // $product = new Product();
        // $manager->persist($product);

        $teacher = new Teacher();
        $teacher->setName("Marry");
        $manager->persist($teacher);

        $teacher2 = new Teacher();
        $teacher2->setName("John");
        $manager->persist($teacher2);

        $manager->flush();
    }
}
