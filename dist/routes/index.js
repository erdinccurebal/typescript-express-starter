"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_1 = __importDefault(require("./errors/index"));
var index_2 = __importDefault(require("./main/index"));
var index_3 = __importDefault(require("./method/index"));
exports["default"] = (function (app) {
    app.get('/', index_2["default"]);
    app.use('/method', index_3["default"]());
    app.use(index_1["default"]());
});
