"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var router = express_1["default"].Router();
var not_found_1 = __importDefault(require("./not-found"));
exports["default"] = (function () {
    router.use(not_found_1["default"]);
    return router;
});
