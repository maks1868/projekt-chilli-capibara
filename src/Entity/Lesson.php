<?php

namespace App\Entity;

use App\Repository\LessonRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: LessonRepository::class)]
#[ORM\Table(name: 'lesson', uniqueConstraints: [
    new ORM\UniqueConstraint(name: 'unique_lesson', columns: [
        'course_id',
        'teacher_id',
        'group_id',
        'room_id',
        'start_time',
        'end_time',
        'type',
        'status'
    ])
])]
class Lesson
{
    const TYPE_LECTURE = 1;
    const TYPE_LAB = 2;
    const TYPE_AUDITORY = 3;
    const TYPE_LECTORATE = 4;
    const TYPE_SEMINAR = 5;
    const TYPE_PROJECT = 6;

    const STATUS_NORMAL = 1;
    const STATUS_EXCEPT = 2;
    const STATUS_COSNULT = 3;
    #[ORM\Id]
    #[ORM\GeneratedValue(strategy: 'IDENTITY')]
    #[ORM\Column(type: 'integer')]
    private ?int $id = null;

    /**
     * @var Course|null
     */
    #[ORM\ManyToOne(inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Course $course = null;

    #[ORM\ManyToOne(inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Group $group = null;

    #[ORM\ManyToOne(cascade: ['persist'], inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: false)]
    private ?Teacher $teacher = null;

    #[ORM\ManyToOne(inversedBy: 'lessons')]
    #[ORM\JoinColumn(nullable: true)]
    private ?Room $room = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $start_time = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $end_time = null;

    #[ORM\Column(length: 50)]
    private ?string $status = null;
    #[ORM\Column(nullable: true)]
    private ?int $type = null;
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCourse(): ?Course
    {
        return $this->course;
    }

    public function setCourse(?Course $course): static
    {
        $this->course = $course;

        return $this;
    }

    public function getGroup(): ?Group
    {
        return $this->group;
    }

    public function setGroup(?Group $group): static
    {
        $this->group = $group;

        return $this;
    }

    public function getTeacher(): ?Teacher
    {
        return $this->teacher;
    }

    public function setTeacher(?Teacher $teacher): static
    {
        $this->teacher = $teacher;

        return $this;
    }

    public function getRoom(): ?Room
    {
        return $this->room;
    }

    public function setRoom(?Room $room): static
    {
        $this->room = $room;

        return $this;
    }

    public function getStartTime(): ?\DateTimeInterface
    {
        return $this->start_time;
    }

    public function setStartTime(\DateTimeInterface $start_time): static
    {
        $this->start_time = $start_time;

        return $this;
    }

    public function getEndTime(): ?\DateTimeInterface
    {
        return $this->end_time;
    }

    public function setEndTime(\DateTimeInterface $end_time): static
    {
        $this->end_time = $end_time;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }


    public function setStatus(?string $status): void
    {
        $this->status = $status;
    }

    public function getType(): ?int
    {
        return $this->type;
    }

    public function setType(?int $type): static
    {
        $this->type = $type;

        return $this;
    }
}
