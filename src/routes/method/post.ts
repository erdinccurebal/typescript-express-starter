import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    const { headers, method , query, originalUrl, body } = req;

    const myJson = {
        originalUrl,
        method,
        query,
        headers,
        body
    }

    res.send(JSON.stringify(myJson));
}