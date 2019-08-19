import {Router} from 'express';
import {AdminController} from './admin.controller';
import {adminValidation} from './admin.validation';

export const adminRouter: Router = Router();


adminRouter.post('/hashtags', adminValidation, AdminController.createHashtag);

adminRouter.get('/hashtags', adminValidation, AdminController.getHashtags);

adminRouter.delete('/hashtags/:id', adminValidation, AdminController.deleteHashtag);

adminRouter.get('/categories', adminValidation, AdminController.getCategories);
