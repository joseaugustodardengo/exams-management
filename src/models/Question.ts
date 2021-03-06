import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Exam } from "./Exam";
import { Option } from "./Option";

@Entity()
export class Question {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  statement: string;

  @OneToMany(() => Option, (option) => option.question, {
    cascade: ["insert"],
  })
  options: Option[];

  @ManyToOne(() => Exam, (exam) => exam.questions, { onDelete: "CASCADE" })
  exam: Exam;
}
