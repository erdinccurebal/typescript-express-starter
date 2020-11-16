"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
var get_1 = __importDefault(require("./get"));
var post_1 = __importDefault(require("./post"));
exports["default"] = (function () {
    router.get('/get', get_1["default"]);
    router.post('/post', post_1["default"]);
    return router;
});
