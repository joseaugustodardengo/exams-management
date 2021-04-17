import { IExam } from "../../../types";
import { Exam } from "../../models/Exam";
import { updateExam } from "../../repositories/ExamsRepository";

export class UpdateExamService {
  public async execute(body: IExam, id: string): Promise<Exam> {
    return updateExam(body, id);
  }
}
