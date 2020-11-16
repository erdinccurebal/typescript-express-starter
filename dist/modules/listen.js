"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const listen = (app, env, message) => {
    const { host, port } = env.express;
    app.listen(port, () => {
        console.log(message);
    });
};
exports.default = listen;
