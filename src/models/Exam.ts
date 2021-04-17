import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Question } from "./Question";

export type ExamType = "ONLINE" | "OFFLINE";

@Entity()
export class Exam {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: "enum",
    enum: ["ONLINE", "OFFLINE"],
  })
  type: ExamType;

  @OneToMany(() => Question, (question) => question.exam, {
    cascade: ["insert"],
  })
  questions: Question[];
}
