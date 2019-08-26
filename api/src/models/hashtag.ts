import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';


export interface IHashtag {
    tag: string;
    photos?: mongoose.Schema.Types.ObjectId[];
    date: Date;
}

const HashtagSchema = new Schema({
    tag: {
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
    date: {
        type: Date
    }
});


export const HashtagModel = mongoose.model('Hashtag', HashtagSchema);
