"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
require("reflect-metadata");
var app_1 = require("./app");
require("./database");
dotenv_1.default.config();
app_1.app.listen(process.env.PORT || 3333, function () { return console.log("Server ir running."); });
