import { NextFunction, Request, Response } from "express";
import { getRepository } from "typeorm";

import { Option } from "../models/Option";

function checkOptionExists(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const optionRepository = getRepository(Option);
  const { id } = request.params;

  const existsOptions = optionRepository.findOneOrFail(id);

  if (!existsOptions) {
    return response.json("Opções não existem.");
  }

  return next();
}

export default checkOptionExists;
