"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (req, res, next) => {
    const { headers, method, query, originalUrl, body } = req;
    const myJson = {
        originalUrl,
        method,
        query,
        headers,
        body
    };
    res.send(JSON.stringify(myJson));
};
