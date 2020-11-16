"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./errors/index"));
const index_2 = __importDefault(require("./main/index"));
const index_3 = __importDefault(require("./method/index"));
exports.default = (app) => {
    app.get('/', index_2.default);
    app.use('/method', index_3.default());
    app.use(index_1.default());
};
