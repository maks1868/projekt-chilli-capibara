<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20241201193143 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__course AS SELECT id, name FROM course');
        $this->addSql('DROP TABLE course');
        $this->addSql('CREATE TABLE course (id INTEGER NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('INSERT INTO course (id, name) SELECT id, name FROM __temp__course');
        $this->addSql('DROP TABLE __temp__course');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_169E6FB95E237E06 ON course (name)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__department AS SELECT id, name FROM department');
        $this->addSql('DROP TABLE department');
        $this->addSql('CREATE TABLE department (id INTEGER NOT NULL, name VARCHAR(10) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('INSERT INTO department (id, name) SELECT id, name FROM __temp__department');
        $this->addSql('DROP TABLE __temp__department');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_CD1DE18A5E237E06 ON department (name)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__group AS SELECT id, stationary, name FROM "group"');
        $this->addSql('DROP TABLE "group"');
        $this->addSql('CREATE TABLE "group" (id INTEGER NOT NULL, stationary BOOLEAN NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('INSERT INTO "group" (id, stationary, name) SELECT id, stationary, name FROM __temp__group');
        $this->addSql('DROP TABLE __temp__group');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6DC044C55E237E06 ON "group" (name)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__lesson AS SELECT id, course_id, group_id, teacher_id, room_id, start_time, end_time, type FROM lesson');
        $this->addSql('DROP TABLE lesson');
        $this->addSql('CREATE TABLE lesson (id INTEGER NOT NULL, course_id INTEGER NOT NULL, group_id INTEGER NOT NULL, teacher_id INTEGER NOT NULL, room_id INTEGER NOT NULL, start_time DATETIME NOT NULL, end_time DATETIME NOT NULL, type VARCHAR(50) NOT NULL, PRIMARY KEY(id), CONSTRAINT FK_F87474F3591CC992 FOREIGN KEY (course_id) REFERENCES course (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F3FE54D947 FOREIGN KEY (group_id) REFERENCES "group" (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F341807E1D FOREIGN KEY (teacher_id) REFERENCES teacher (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F354177093 FOREIGN KEY (room_id) REFERENCES room (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO lesson (id, course_id, group_id, teacher_id, room_id, start_time, end_time, type) SELECT id, course_id, group_id, teacher_id, room_id, start_time, end_time, type FROM __temp__lesson');
        $this->addSql('DROP TABLE __temp__lesson');
        $this->addSql('CREATE INDEX IDX_F87474F354177093 ON lesson (room_id)');
        $this->addSql('CREATE INDEX IDX_F87474F341807E1D ON lesson (teacher_id)');
        $this->addSql('CREATE INDEX IDX_F87474F3FE54D947 ON lesson (group_id)');
        $this->addSql('CREATE INDEX IDX_F87474F3591CC992 ON lesson (course_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__room AS SELECT id, department_id, name FROM room');
        $this->addSql('DROP TABLE room');
        $this->addSql('CREATE TABLE room (id INTEGER NOT NULL, department_id INTEGER NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id), CONSTRAINT FK_729F519BAE80F5DF FOREIGN KEY (department_id) REFERENCES department (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO room (id, department_id, name) SELECT id, department_id, name FROM __temp__room');
        $this->addSql('DROP TABLE __temp__room');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_729F519B5E237E06 ON room (name)');
        $this->addSql('CREATE INDEX IDX_729F519BAE80F5DF ON room (department_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__student AS SELECT id, student_id FROM student');
        $this->addSql('DROP TABLE student');
        $this->addSql('CREATE TABLE student (id INTEGER NOT NULL, student_id INTEGER NOT NULL, PRIMARY KEY(id))');
        $this->addSql('INSERT INTO student (id, student_id) SELECT id, student_id FROM __temp__student');
        $this->addSql('DROP TABLE __temp__student');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B723AF33CB944F1A ON student (student_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__teacher AS SELECT id, name FROM teacher');
        $this->addSql('DROP TABLE teacher');
        $this->addSql('CREATE TABLE teacher (id INTEGER NOT NULL, name VARCHAR(100) NOT NULL, PRIMARY KEY(id))');
        $this->addSql('INSERT INTO teacher (id, name) SELECT id, name FROM __temp__teacher');
        $this->addSql('DROP TABLE __temp__teacher');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B0F6A6D55E237E06 ON teacher (name)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__course AS SELECT id, name FROM course');
        $this->addSql('DROP TABLE course');
        $this->addSql('CREATE TABLE course (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(50) NOT NULL)');
        $this->addSql('INSERT INTO course (id, name) SELECT id, name FROM __temp__course');
        $this->addSql('DROP TABLE __temp__course');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_169E6FB95E237E06 ON course (name)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__department AS SELECT id, name FROM department');
        $this->addSql('DROP TABLE department');
        $this->addSql('CREATE TABLE department (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(10) NOT NULL)');
        $this->addSql('INSERT INTO department (id, name) SELECT id, name FROM __temp__department');
        $this->addSql('DROP TABLE __temp__department');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_CD1DE18A5E237E06 ON department (name)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__group AS SELECT id, stationary, name FROM "group"');
        $this->addSql('DROP TABLE "group"');
        $this->addSql('CREATE TABLE "group" (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, stationary BOOLEAN NOT NULL, name VARCHAR(50) NOT NULL)');
        $this->addSql('INSERT INTO "group" (id, stationary, name) SELECT id, stationary, name FROM __temp__group');
        $this->addSql('DROP TABLE __temp__group');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_6DC044C55E237E06 ON "group" (name)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__lesson AS SELECT id, course_id, group_id, teacher_id, room_id, start_time, end_time, type FROM lesson');
        $this->addSql('DROP TABLE lesson');
        $this->addSql('CREATE TABLE lesson (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, course_id INTEGER NOT NULL, group_id INTEGER NOT NULL, teacher_id INTEGER NOT NULL, room_id INTEGER NOT NULL, start_time DATETIME NOT NULL, end_time DATETIME NOT NULL, type VARCHAR(50) NOT NULL, CONSTRAINT FK_F87474F3591CC992 FOREIGN KEY (course_id) REFERENCES course (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F3FE54D947 FOREIGN KEY (group_id) REFERENCES "group" (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F341807E1D FOREIGN KEY (teacher_id) REFERENCES teacher (id) NOT DEFERRABLE INITIALLY IMMEDIATE, CONSTRAINT FK_F87474F354177093 FOREIGN KEY (room_id) REFERENCES room (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO lesson (id, course_id, group_id, teacher_id, room_id, start_time, end_time, type) SELECT id, course_id, group_id, teacher_id, room_id, start_time, end_time, type FROM __temp__lesson');
        $this->addSql('DROP TABLE __temp__lesson');
        $this->addSql('CREATE INDEX IDX_F87474F3591CC992 ON lesson (course_id)');
        $this->addSql('CREATE INDEX IDX_F87474F3FE54D947 ON lesson (group_id)');
        $this->addSql('CREATE INDEX IDX_F87474F341807E1D ON lesson (teacher_id)');
        $this->addSql('CREATE INDEX IDX_F87474F354177093 ON lesson (room_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__room AS SELECT id, department_id, name FROM room');
        $this->addSql('DROP TABLE room');
        $this->addSql('CREATE TABLE room (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, department_id INTEGER NOT NULL, name VARCHAR(50) NOT NULL, CONSTRAINT FK_729F519BAE80F5DF FOREIGN KEY (department_id) REFERENCES department (id) NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO room (id, department_id, name) SELECT id, department_id, name FROM __temp__room');
        $this->addSql('DROP TABLE __temp__room');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_729F519B5E237E06 ON room (name)');
        $this->addSql('CREATE INDEX IDX_729F519BAE80F5DF ON room (department_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__student AS SELECT id, student_id FROM student');
        $this->addSql('DROP TABLE student');
        $this->addSql('CREATE TABLE student (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, student_id INTEGER NOT NULL)');
        $this->addSql('INSERT INTO student (id, student_id) SELECT id, student_id FROM __temp__student');
        $this->addSql('DROP TABLE __temp__student');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B723AF33CB944F1A ON student (student_id)');
        $this->addSql('CREATE TEMPORARY TABLE __temp__teacher AS SELECT id, name FROM teacher');
        $this->addSql('DROP TABLE teacher');
        $this->addSql('CREATE TABLE teacher (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(100) NOT NULL)');
        $this->addSql('INSERT INTO teacher (id, name) SELECT id, name FROM __temp__teacher');
        $this->addSql('DROP TABLE __temp__teacher');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_B0F6A6D55E237E06 ON teacher (name)');
    }
}
