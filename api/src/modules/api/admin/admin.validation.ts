import {Response} from "express";
import {Request} from "express";
import {NextFunction} from "express";
import {User} from "../../../interfaces/user";

export const adminValidation = (req: Request, res: Response, next: NextFunction) => {
    const user: User = req.user;
    if (user.role === 'admin') {
        next();
    } else {
        throw new Error('Invalid request');
    }
};
