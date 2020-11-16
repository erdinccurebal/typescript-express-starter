"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const get_1 = __importDefault(require("./get"));
const post_1 = __importDefault(require("./post"));
exports.default = () => {
    router.get('/get', get_1.default);
    router.post('/post', post_1.default);
    return router;
};
