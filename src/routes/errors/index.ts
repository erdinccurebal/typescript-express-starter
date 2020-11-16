import express,{ Router } from 'express';
const router: Router = express.Router();

import notFound from './not-found';

export default () => {
    router.use(notFound);
    return router;
};