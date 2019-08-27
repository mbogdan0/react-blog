import {PhotoModel} from "../../../models/photo";
import {CategoryModel} from "../../../models/category";


export class Main {

    static async photos(body) {

        const cat = body.category;
        const idCat = (await CategoryModel.findOne({ urlName: cat }).lean())._id;


        return await PhotoModel.find({category: idCat}).select('-tags -date -size -__v -_id');
    }

}