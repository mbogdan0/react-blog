import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';
import {MongooseAutoIncrementID} from "mongoose-auto-increment-reworked";



export interface ISelection {
    category: 'portrait' | 'travel';
    photos: any;
    tags: any;
    active: boolean;
    date: Date;
}

const SelectionSchema = new Schema({
    category: {
        type: String,
        required: true,
        index: true
    },
    photos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Photo'
    }],
    tags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hashtag'
    }],
    active: {
        type: Boolean,
        default: true
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

const plugin = new MongooseAutoIncrementID(SelectionSchema, 'Selection', options);
plugin.applyPlugin().catch(console.error);


export const SelectionModel = mongoose.model('Selection', SelectionSchema);
