import {NextFunction, Request, Response} from "express";
import {Main} from "./main";


export class MainController {

    static async photos(req: Request, res: Response, next: NextFunction) {
        try {
            const body = req.body;
            const data = await Main.photos(body);
            res.json({
                success: true,
                data: data
            });
        } catch (e) {
            next(e);
        }
    }
}