import { IQuestion } from "../../../types";
import { Question } from "../../models/Question";
import { createQuestion } from "../../repositories/QuestionsRepository";

export class CreateQuestionService {
  public async execute(body: IQuestion): Promise<Question> {
    return createQuestion(body);
  }
}
