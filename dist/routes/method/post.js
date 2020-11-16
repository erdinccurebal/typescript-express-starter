"use strict";
exports.__esModule = true;
exports["default"] = (function (req, res, next) {
    var headers = req.headers, method = req.method, query = req.query, originalUrl = req.originalUrl, body = req.body;
    var myJson = {
        originalUrl: originalUrl,
        method: method,
        query: query,
        headers: headers,
        body: body
    };
    res.send(JSON.stringify(myJson));
});
