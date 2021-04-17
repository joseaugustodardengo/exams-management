"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
var typeorm_1 = require("typeorm");
var Exam_1 = require("./Exam");
var Option_1 = require("./Option");
var Question = /** @class */ (function () {
    function Question() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Question.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Question.prototype, "statement", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return Option_1.Option; }, function (option) { return option.question; }, {
            cascade: ["insert"],
        }),
        __metadata("design:type", Array)
    ], Question.prototype, "options", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Exam_1.Exam; }, function (exam) { return exam.questions; }, { onDelete: "CASCADE" }),
        __metadata("design:type", Exam_1.Exam)
    ], Question.prototype, "exam", void 0);
    Question = __decorate([
        typeorm_1.Entity()
    ], Question);
    return Question;
}());
exports.Question = Question;
