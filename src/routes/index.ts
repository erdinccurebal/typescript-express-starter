import { Application } from 'express';

import errors from './errors/index';
import main from './main/index';
import method from './method/index';

export default (app: Application) => {
    app.get('/', main);
    app.use('/method',method());
    app.use(errors());
}