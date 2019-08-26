import * as moment from "moment";
import {HashtagModel, IHashtag} from "../../../models/hashtag";
import {CategoryModel, ICategory} from "../../../models/category";
import {PhotoModel} from "../../../models/photo";
import * as mongoose from 'mongoose';

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
        return await HashtagModel.aggregate([
            {
                $project: {
                    tag: 1,
                    date: 1,
                    photos: { $size: '$photos' }
                }
            }
        ]).exec();
    }

    static async deleteHashtag(id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw "Invalid ID";
        }

        const deleteTagsOnPhotos = PhotoModel.updateMany({tags: id}, { $pull: {tags: id} });
        const deleteTag = HashtagModel.deleteOne({_id: id});
        await Promise.all([deleteTagsOnPhotos, deleteTag]);

        return true;
    }

    static async getCategories() {
        const data = (await CategoryModel.find({}).lean().select('-__v -tags')) || [];
        data.unshift(<ICategory>{_id: '0', name: 'Не выбрано'});
        return data;
    }

}
