import { getRepository } from "typeorm";

import { IQuestion } from "../../types";
import { Question } from "../models/Question";

export const getQuestions = async (): Promise<Question[]> => {
  const questionRepository = getRepository(Question);
  return questionRepository.find({ relations: ["options"] });
};

export const createQuestion = async (data: IQuestion): Promise<Question> => {
  const questionRepository = getRepository(Question);
  const question = new Question();
  return questionRepository.save({
    ...question,
    ...data,
  });
};

export const updateQuestion = async (
  data: IQuestion,
  id: string
): Promise<Question> => {
  const questionRepository = getRepository(Question);
  const { options } = data;

  const question = await questionRepository.findOneOrFail(id);

  const results = await questionRepository.save({
    ...question,
    options,
  });

  return results;
};

export const deleteQuestion = async (id: string): Promise<void> => {
  const questionRepository = getRepository(Question);
  const question = await questionRepository.findOne(id);

  if (question) {
    await questionRepository.delete(id);
  }
};
