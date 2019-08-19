import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';


export interface IHashtag {
    tag: string;
    date: Date;
}

const HashtagSchema = new Schema({
    tag: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    date: {
        type: Date
    }
});


export const HashtagModel = mongoose.model('Hashtag', HashtagSchema);
