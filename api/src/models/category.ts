import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';


export interface ICategory {
    name: string;
    photos?: mongoose.Schema.Types.ObjectId[];
    urlName: string;
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    urlName: {
      type: String,
        required: true,
        unique: true,
        index: true
    },
    photos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Photo'
        }
    ],
});


export const CategoryModel = mongoose.model('Category', CategorySchema);
