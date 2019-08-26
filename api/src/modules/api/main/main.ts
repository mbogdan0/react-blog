import {PhotoModel} from "../../../models/photo";


export class Main {

    static async photos(body) {

        console.log(body);

        return await PhotoModel.find({});
    }

}