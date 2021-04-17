"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Exam_1 = require("../models/Exam");
function checkExamExists(request, response, next) {
    var questionRepository = typeorm_1.getRepository(Exam_1.Exam);
    var id = request.params.id;
    var existsExams = questionRepository.findOneOrFail(id);
    if (!existsExams) {
        return response.json("Questões não existem.");
    }
    return next();
}
exports.default = checkExamExists;
