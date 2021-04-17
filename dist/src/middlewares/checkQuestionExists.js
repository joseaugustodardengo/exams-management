"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Question_1 = require("../models/Question");
function checkQuestionExists(request, response, next) {
    var questionRepository = typeorm_1.getRepository(Question_1.Question);
    var id = request.params.id;
    var existsQuestions = questionRepository.findOneOrFail(id);
    if (!existsQuestions) {
        return response.json("Questões não existem.");
    }
    return next();
}
exports.default = checkQuestionExists;
