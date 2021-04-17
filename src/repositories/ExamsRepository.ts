import { getRepository } from "typeorm";

import { IExam } from "../../types";
import { Exam } from "../models/Exam";

export const getExams = async (): Promise<Exam[]> => {
  const examRepository = getRepository(Exam);
  return examRepository.find({ relations: ["questions"] });
};

export const createExam = async (data: IExam): Promise<Exam> => {
  const examRepository = getRepository(Exam);
  const exam = new Exam();
  return examRepository.save({
    ...exam,
    ...data,
  });
};

export const updateExam = async (data: IExam, id: string): Promise<Exam> => {
  const examRepository = getRepository(Exam);
  const { name, description, type, questions } = data;

  const exam = await examRepository.findOneOrFail(id);

  const results = await examRepository.save({
    ...exam,
    name,
    description,
    type,
    questions,
  });

  return results;
};

export const deleteExam = async (id: string): Promise<void> => {
  const examRepository = getRepository(Exam);
  const exam = await examRepository.findOne(id);

  if (exam) {
    await examRepository.delete(id);
  }
};
