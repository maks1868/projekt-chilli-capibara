<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241205115340 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE student_group (student_id INTEGER NOT NULL, group_id INTEGER NOT NULL, PRIMARY KEY(student_id, group_id), CONSTRAINT FK_E5F73D58CB944F1A FOREIGN KEY (student_id) REFERENCES student (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_E5F73D58FE54D947 FOREIGN KEY (group_id) REFERENCES "group" (id) ON DELETE CASCADE NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('CREATE INDEX IDX_E5F73D58CB944F1A ON student_group (student_id)');
        $this->addSql('CREATE INDEX IDX_E5F73D58FE54D947 ON student_group (group_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__lesson AS SELECT id, course_id, group_id, teacher_id, room_id, start_time, end_time, type, status FROM lesson');
        $this->addSql('DROP TABLE lesson');
        $this->addSql('CREATE TABLE lesson (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, course_id INTEGER NOT NULL, group_id INTEGER DEFAULT NULL, teacher_id INTEGER NOT NULL, room_id INTEGER NOT NULL, start_time DATETIME NOT NULL, end_time DATETIME NOT NULL, type INTEGER DEFAULT NULL, status VARCHAR(50) NOT NULL, CONSTRAINT FK_F87474F3591CC992 FOREIGN KEY (course_id) REFERENCES course (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F3FE54D947 FOREIGN KEY (group_id) REFERENCES "group" (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F341807E1D FOREIGN KEY (teacher_id) REFERENCES teacher (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F354177093 FOREIGN KEY (room_id) REFERENCES room (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO lesson (id, course_id, group_id, teacher_id, room_id, start_time, end_time, type, status) SELECT id, course_id, group_id, teacher_id, room_id, start_time, end_time, type, status FROM __temp__lesson');
        $this->addSql('DROP TABLE __temp__lesson');
        $this->addSql('CREATE INDEX IDX_F87474F354177093 ON lesson (room_id)');
        $this->addSql('CREATE INDEX IDX_F87474F341807E1D ON lesson (teacher_id)');
        $this->addSql('CREATE INDEX IDX_F87474F3FE54D947 ON lesson (group_id)');
        $this->addSql('CREATE INDEX IDX_F87474F3591CC992 ON lesson (course_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE student_group');
        $this->addSql('CREATE TEMPORARY TABLE __temp__lesson AS SELECT id, course_id, group_id, teacher_id, room_id, start_time, end_time, status, type FROM lesson');
        $this->addSql('DROP TABLE lesson');
        $this->addSql('CREATE TABLE lesson (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, course_id INTEGER NOT NULL, group_id INTEGER NOT NULL, teacher_id INTEGER NOT NULL, room_id INTEGER NOT NULL, start_time DATETIME NOT NULL, end_time DATETIME NOT NULL, status VARCHAR(50) NOT NULL, type VARCHAR(50) NOT NULL, CONSTRAINT FK_F87474F3591CC992 FOREIGN KEY (course_id) REFERENCES course (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F3FE54D947 FOREIGN KEY (group_id) REFERENCES "group" (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F341807E1D FOREIGN KEY (teacher_id) REFERENCES teacher (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F354177093 FOREIGN KEY (room_id) REFERENCES room (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO lesson (id, course_id, group_id, teacher_id, room_id, start_time, end_time, status, type) SELECT id, course_id, group_id, teacher_id, room_id, start_time, end_time, status, type FROM __temp__lesson');
        $this->addSql('DROP TABLE __temp__lesson');
        $this->addSql('CREATE INDEX IDX_F87474F3591CC992 ON lesson (course_id)');
        $this->addSql('CREATE INDEX IDX_F87474F3FE54D947 ON lesson (group_id)');
        $this->addSql('CREATE INDEX IDX_F87474F341807E1D ON lesson (teacher_id)');
        $this->addSql('CREATE INDEX IDX_F87474F354177093 ON lesson (room_id)');
    }
}
