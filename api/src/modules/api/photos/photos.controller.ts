import {NextFunction, Request, Response} from 'express';
import {Photos} from "./photos";

export class PhotosController {

    static async photo(req: Request, res: Response, next: NextFunction) {
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

    static async all(req: Request, res: Response, next: NextFunction) {
        try {
            const data = await Photos.all();
            res.json({
                success: true,
                data
            });
        } catch (e) {
            next(e);
        }
    }

    static async photoById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const data = await Photos.photoById(id);
            res.json({
                success: true,
                data
            });
        } catch (e) {
            next(e);
        }
    }

    static async updateOne(req: Request, res: Response, next: NextFunction) {
        try {
            const form = req.body;
            const data = await Photos.updateOne(form);
            res.json({
                success: true,
                data
            });
        } catch (e) {
            next(e);
        }
    }

    static async deletePhoto(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            await Photos.deletePhoto(id);
            res.json({
                success: true
            });
        } catch (e) {
            next(e);
        }
    }

}