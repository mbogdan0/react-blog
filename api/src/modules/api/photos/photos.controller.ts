import {NextFunction, Request, Response} from 'express';
import {Photos} from "./photos";

export class PhotosController {

    static async photo(req: Request | any, res: Response, next: NextFunction) {
        try {
            const form = req.body;
            await Photos.photo(form, req.files);
            res.json({
                success: true
            });
        } catch (e) {
            next(e);
        }
    }

}