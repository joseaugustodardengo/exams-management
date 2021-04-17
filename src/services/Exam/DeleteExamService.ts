import { deleteExam } from "../../repositories/ExamsRepository";

export class DeleteExamService {
  public async execute(id: string): Promise<void> {
    deleteExam(id);
  }
}
