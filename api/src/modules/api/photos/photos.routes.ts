import {Router} from "express";
import {PhotosController} from "./photos.controller";
import {photosValidation} from "./photos.validation";
import {generateName} from "./photos.helpers";
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const mime = require('mime');


export const photosRouter: Router = Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const _path = path.join(__dirname, '..', '..', '..', '..', 'uploads');
        if (!fs.existsSync(_path)) {
            fs.mkdirSync(_path);
            cb(null, _path);
        } else {
            cb(null, _path);
        }
    },
    filename: function (req, file, cb) {
        const ext = mime.getExtension(file.mimetype);
        const fileName = generateName(9) + '.' + ext;
        cb(null, fileName);
    }
});


const upload = multer({ storage: storage });

const cpUpload = upload.fields([
    {name: 'file', maxCount: 1},
    {name: 'file-copy', maxCount: 1}
]);


photosRouter.post('/upload', photosValidation, cpUpload, PhotosController.photo);

photosRouter.get('/all', photosValidation, PhotosController.all);

photosRouter.get('/photo/:id', photosValidation, PhotosController.photoById);

photosRouter.post('/update', photosValidation, PhotosController.updateOne);

photosRouter.delete('/photo/:id', photosValidation, PhotosController.deletePhoto);

