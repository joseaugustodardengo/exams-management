"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var express_1 = __importDefault(require("express"));
var exams_routes_1 = require("./routes/exams.routes");
var questions_routes_1 = require("./routes/questions.routes");
exports.app = express_1.default();
exports.app.use(express_1.default.json());
exports.app.use("/questions", questions_routes_1.questionsRouter);
exports.app.use("/exams", exams_routes_1.examsRouter);
