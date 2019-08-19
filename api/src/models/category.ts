import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';


export interface ICategory {
    name: string;
}

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    }
});


export const CategoryModel = mongoose.model('Category', CategorySchema);
