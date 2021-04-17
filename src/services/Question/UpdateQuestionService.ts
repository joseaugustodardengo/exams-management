import { IQuestion } from "../../../types";
import { Question } from "../../models/Question";
import { updateQuestion } from "../../repositories/QuestionsRepository";

export class UpdateQuestionService {
  public async execute(body: IQuestion, id: string): Promise<Question> {
    return updateQuestion(body, id);
  }
}
