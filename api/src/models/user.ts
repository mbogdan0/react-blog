import {Schema} from 'mongoose';
import * as mongoose from 'mongoose';


export interface IUser {
    username?: string;
    password?: string;
    role?: string;
    [x: string]: any;
}

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        index: true
    },
    role: {
        type: String,
        default: 'user'
    },
});


export const UserModel = mongoose.model('User', UserSchema);
