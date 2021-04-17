import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import { Question } from "../models/Question";

function checkQuestionExists(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const questionRepository = getRepository(Question);
  const { id } = request.params;

  const existsQuestions = questionRepository.findOneOrFail(id);

  if (!existsQuestions) {
    return response.json("Questões não existem.");
  }

  return next();
}

export default checkQuestionExists;
