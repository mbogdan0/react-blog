import {NextFunction, Request, Response} from 'express';
import {Auth} from './auth';


export class AuthController {

    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const form = req.body;
            const data = await Auth.login(form);
            res.json({
                success: true,
                data: data
            });
        } catch (e) {
            next(e);
        }
    }

}
