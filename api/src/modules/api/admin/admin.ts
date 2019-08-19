import * as moment from "moment";
import {HashtagModel, IHashtag} from "../../../models/hashtag";
import {CategoryModel, ICategory} from "../../../models/category";

export class Admin {


    static async createHashtag(form) {
        try {
            await new HashtagModel(<IHashtag>{
                tag: form.tag.trim(),
                date: moment().utc().toDate()
            }).save();
        } catch (e) {
            if (e && e.code && e.code === 11000) {
                throw `Тэг "${form.tag}" уже есть`;
            } else {
                throw e;
            }
        }
    }

    static async getHashtags() {
        return await HashtagModel.find({}).lean().select('-__v');
    }

    static async deleteHashtag(id) {
        return await HashtagModel.deleteOne({_id: id});
    }

    static async getCategories() {
        const data = (await CategoryModel.find({}).lean().select('-__v')) || [];
        data.unshift(<ICategory>{_id: '0', name: 'Не выбрано'});
        console.log(data);
        return data;
    }

}
