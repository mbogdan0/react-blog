import {Schema, Types} from 'mongoose';
import * as mongoose from 'mongoose';
import {MongooseAutoIncrementID} from 'mongoose-auto-increment-reworked';


export interface IPhoto {
    photoPosition?: string;
    path: string;
    tinyPath: string;
    category: Types.ObjectId;
    tags?: mongoose.Schema.Types.ObjectId[];
    size: number;
    date: Date;
}

const PhotoSchema = new Schema({
    photoPosition: {
        type: String
    },
    path: {
        type: String,
        required: true
    },
    tinyPath: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    tags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ],
    size: {
        type: Number
    },
    date: {
        type: Date
    }
});



const options = {
    field: 'short_id',
    incrementBy: 1,
    resetCount: 'reset',
    startAt: 1000
};

const plugin = new MongooseAutoIncrementID(PhotoSchema, 'Photo', options);
plugin.applyPlugin().catch(console.error);

export const PhotoModel = mongoose.model('Photo', PhotoSchema);
