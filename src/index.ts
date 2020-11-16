import express, { Application } from 'express';
import * as bodyParser from 'body-parser';

const app: Application = express();

import listen from './modules/listen';
import router from './routes/index';
import env from './env';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);

listen(app, env, 'Express Server Listening..');