import { deleteQuestion } from "../../repositories/QuestionsRepository";

export class DeleteQuestionService {
  public async execute(id: string): Promise<void> {
    deleteQuestion(id);
  }
}
