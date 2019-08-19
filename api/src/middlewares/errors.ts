import * as express from 'express';

export const errorsMiddleware = (error: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    let msgError;
    try {
        if (typeof error === "string") {
            msgError = error;
        } else {
            msgError = error.message;
        }
    } catch (e) {
        msgError = 'Unknown error';
    }
    res.status(400).json({success: false, error: msgError});
};
