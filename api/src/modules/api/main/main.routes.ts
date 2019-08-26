import {Router} from 'express';
import {MainController} from "./main.controller";

export const mainRouter: Router = Router();

mainRouter.post('/photos', MainController.photos);
