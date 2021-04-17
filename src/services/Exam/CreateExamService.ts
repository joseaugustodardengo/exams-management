import { IExam } from "../../../types";
import { Exam } from "../../models/Exam";
import { createExam } from "../../repositories/ExamsRepository";

export class CreateExamService {
  public async execute(body: IExam): Promise<Exam> {
    return createExam(body);
  }
}
