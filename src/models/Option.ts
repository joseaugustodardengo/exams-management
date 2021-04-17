import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

import { Question } from "./Question";

@Entity()
export class Option {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  key: string;

  @Column()
  value: string;

  @Column()
  correct: boolean;

  @ManyToOne(() => Question, (question) => question.options, {
    onDelete: "CASCADE",
  })
  question: Question;
}
