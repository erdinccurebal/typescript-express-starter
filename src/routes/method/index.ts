import express, { Router } from 'express';
const router: Router = express.Router();

import get from './get';
import post from './post';

export default () => {
    router.get('/get', get);
    router.post('/post', post);
    return router;
}