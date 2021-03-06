"use strict";
exports.__esModule = true;
exports.CatController = void 0;
var express_1 = require("express");
var service = require("../service/service");
var CatController = express_1.Router();
exports.CatController = CatController;
CatController.get('/', service.getAll);
CatController.get('/:id', service.getById);
CatController.post('/', service.createOne);
