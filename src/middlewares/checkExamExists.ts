import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import { Exam } from "../models/Exam";

function checkExamExists(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const questionRepository = getRepository(Exam);
  const { id } = request.params;

  const existsExams = questionRepository.findOneOrFail(id);

  if (!existsExams) {
    return response.json("Questões não existem.");
  }

  return next();
}

export default checkExamExists;
