import {Router} from 'express';

import {accessMiddleware} from "../middlewares/jwt";
import {adminRouter} from "./api/admin/admin.routes";
import {authRouter} from "./api/auth/auth.routes";
import {photosRouter} from "./api/photos/photos.routes";


export const router: Router = Router();


router.use('/admin', accessMiddleware, adminRouter);
router.use('/photos', accessMiddleware, photosRouter);

router.use('/auth', authRouter);
