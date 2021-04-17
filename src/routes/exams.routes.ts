import { Request, Response, Router } from "express";

import checkExamExists from "../middlewares/checkExamExists";
// import checkQuestionExists from "../middlewares/checkQuestionExists";
import { CreateExamService } from "../services/Exam/CreateExamService";
import { DeleteExamService } from "../services/Exam/DeleteExamService";
import { ListExamService } from "../services/Exam/ListExamService";
import { UpdateExamService } from "../services/Exam/UpdateExamService";

export const examsRouter = Router();

examsRouter.get("/", async (request: Request, response: Response) => {
  const getExamService = new ListExamService();
  const exams = await getExamService.getExams();
  return response.json(exams);
});

examsRouter.use(checkExamExists);

examsRouter.post("/", async (request: Request, response: Response) => {
  const createExamService = new CreateExamService();
  const exam = await createExamService.execute(request.body);
  return response.status(201).json(exam);
});

examsRouter.put("/:id", async (request: Request, response: Response) => {
  const updateExamService = new UpdateExamService();
  const exam = await updateExamService.execute(request.body, request.params.id);
  return response.json(exam);
});

examsRouter.delete("/:id", async (request: Request, response: Response) => {
  const deleteExamService = new DeleteExamService();
  await deleteExamService.execute(request.params.id);
  return response.send();
});
