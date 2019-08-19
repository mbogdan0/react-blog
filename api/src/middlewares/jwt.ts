import * as jwt from 'express-jwt';
import {Config} from '../config';
import {Request, Response, NextFunction} from 'express';


export const accessMiddleware = [jwt({
    secret: Config.jwtToken,
    getToken: (req) => {
        const header = req.headers.authorization as string;
        if (header && header.split(' ')[0] === 'Bearer') {
            return header.split(' ')[1];
        }
        return null;
    },
}), function (req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
        res.send({status: 'ok'});
    } else if (!req.user) {
        next('Not permitted');
    } else {
        next();
    }
}];
