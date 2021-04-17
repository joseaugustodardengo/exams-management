import express from "express";

import { examsRouter } from "./routes/exams.routes";
import { questionsRouter } from "./routes/questions.routes";

export const app = express();
app.use(express.json());

app.use("/questions", questionsRouter);
app.use("/exams", examsRouter);
