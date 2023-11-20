import { Request, Response, NextFunction } from 'express';

export async function logMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(
            '\x1b[33m',
            `[ ${new Date().toLocaleString('ru', {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: '2-digit'
            })} ]\n`,
            '\x1b[32m',
            req.method,
            '\x1b[31m',
            `\n ${req.path}`,
            '\x1b[37m'
        );

        return next();
    } catch (error) {
        next(error);
    }
}
