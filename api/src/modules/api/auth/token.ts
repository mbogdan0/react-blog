import {IUser} from "../../../models/user";
import {Config} from "../../../config";
const jwt = require('jsonwebtoken');

export const generateJWToken = (user: IUser) => {
    const out = {
        id: user._id,
        role: 'admin'
    };

    const expires = 86400 * 365 * 10;
    return jwt.sign(out, Config.jwtToken, {
        expiresIn: expires
    });
};
