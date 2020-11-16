import { Application } from 'express';

const listen = (app: Application, env: any, message: string) => {
    const { host, port } = env.express;
    app.listen(port, host, () => {
        console.log(message);
    });
};

export default listen;

