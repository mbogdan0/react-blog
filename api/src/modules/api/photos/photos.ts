import {generateName} from "./photos.helpers";
import * as moment from "moment";
import {IPhoto, PhotoModel} from "../../../models/photo";
const sharp = require('sharp');
import * as mongoose from 'mongoose';
const mime = require('mime');
const path = require('path');

export class Photos {

    static async photo(form, files) {
        if (files && files.file && Array.isArray(files.file) && files.file[0]) {
            const obj = files.file[0];

            const ext = mime.getExtension(obj.mimetype);
            const smallName = path.join(obj.path, '..', generateName(9) + '.' + ext);


            const category = mongoose.Types.ObjectId.isValid(form.category) ? form.category : null;
            const photoPosition = '';

            await sharp(obj.path).resize({ height: 125, width: 125 }).toFile(smallName);

            return await new PhotoModel(<IPhoto> {
                photoPosition: photoPosition,
                path: path.basename(obj.path),
                tinyPath: path.basename(smallName),
                category: category,
                size: obj.size,
                date: moment().utc().toDate()
            }).save();
        } else {
            throw "Не удалось загрузить изображение";
        }
    }

}