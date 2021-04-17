"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Option_1 = require("../models/Option");
function checkOptionExists(request, response, next) {
    var optionRepository = typeorm_1.getRepository(Option_1.Option);
    var id = request.params.id;
    var existsOptions = optionRepository.findOneOrFail(id);
    if (!existsOptions) {
        return response.json("Opções não existem.");
    }
    return next();
}
exports.default = checkOptionExists;
