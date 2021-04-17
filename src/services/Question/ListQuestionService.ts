import { Question } from "../../models/Question";
import { getQuestions } from "../../repositories/QuestionsRepository";

export class ListQuestionService {
  public async getQuestions(): Promise<Question[]> {
    return getQuestions();
  }
}
