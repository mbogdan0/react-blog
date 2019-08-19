import {NextFunction, Request, Response} from 'express';
import {Admin} from './admin';


export class AdminController {

    static async createHashtag(req: Request, res: Response, next: NextFunction) {
        try {
            const form = req.body;
            await Admin.createHashtag(form);
            res.json({
                success: true
            });
        } catch (e) {
            console.log('here ', e)
            next(e);
        }
    }

    static async getHashtags(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await Admin.getHashtags();
            res.json({
                success: true,
                data
            });
        } catch (e) {
            next(e);
        }
    }

    static async deleteHashtag(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            await Admin.deleteHashtag(id);
            res.json({
                success: true
            });
        } catch (e) {
            next(e);
        }
    }

    static async getCategories(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await Admin.getCategories();
            res.json({
                success: true,
                data
            });
        } catch (e) {
            next(e);
        }
    }
}
