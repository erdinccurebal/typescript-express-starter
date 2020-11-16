"use strict";
exports.__esModule = true;
var listen = function (app, env, message) {
    var _a = env.express, host = _a.host, port = _a.port;
    app.listen(port, host, function () {
        console.log(message);
    });
};
exports["default"] = listen;
