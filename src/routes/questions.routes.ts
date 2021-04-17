import { Request, Response, Router } from "express";

import checkOptionExists from "../middlewares/checkOptionExists";
import checkQuestionExists from "../middlewares/checkQuestionExists";
import { CreateQuestionService } from "../services/Question/CreateQuestionService";
import { DeleteQuestionService } from "../services/Question/DeleteQuestionService";
import { ListQuestionService } from "../services/Question/ListQuestionService";
import { UpdateQuestionService } from "../services/Question/UpdateQuestionService";

export const questionsRouter = Router();

questionsRouter.get("/", async (request: Request, response: Response) => {
  const getQuestionService = new ListQuestionService();
  const exams = await getQuestionService.getQuestions();
  return response.json(exams);
});

questionsRouter.use(checkOptionExists, checkQuestionExists);

questionsRouter.post("/", async (request: Request, response: Response) => {
  const createQuestionService = new CreateQuestionService();
  const question = await createQuestionService.execute(request.body);
  return response.status(201).json(question);
});

questionsRouter.put("/:id", async (request: Request, response: Response) => {
  const updateQuestionService = new UpdateQuestionService();
  const question = await updateQuestionService.execute(
    request.body,
    request.params.id
  );
  return response.json(question);
});

questionsRouter.delete("/:id", async (request: Request, response: Response) => {
  const deleteQuestionService = new DeleteQuestionService();
  await deleteQuestionService.execute(request.params.id);
  return response.send();
});
