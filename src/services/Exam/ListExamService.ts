import { Exam } from "../../models/Exam";
import { getExams } from "../../repositories/ExamsRepository";

export class ListExamService {
  public async getExams(): Promise<Exam[]> {
    return getExams();
  }
}
