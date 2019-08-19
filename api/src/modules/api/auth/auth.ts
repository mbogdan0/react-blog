import {UserModel} from '../../../models/user';
import {generateJWToken} from "./token";


export class Auth {
    static async login(form) {

        const user = await UserModel.findOne({
            username: form.username,
            password: form.password,
            role: 'admin'
        });
        if (!user) {
            throw new Error("Неправильный логин или пароль");
        }
        return {
            token: generateJWToken(user),
            username: form.username
        };
    }

}
