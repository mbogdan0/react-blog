import {generateName} from "./photos.helpers";
import * as moment from "moment";
import {IPhoto, PhotoModel} from "../../../models/photo";
const sharp = require('sharp');
import * as mongoose from 'mongoose';
import {HashtagModel} from "../../../models/hashtag";
import {CategoryModel} from "../../../models/category";
import {promiseUnlink} from "../../../help";
const mime = require('mime');
const path = require('path');

export class Photos {

    static async photo(form, files) {
        if (files && files.file && Array.isArray(files.file) && files.file[0]) {
            const obj = files.file[0];

            const ext = mime.getExtension(obj.mimetype);
            const smallName = path.join(obj.path, '..', generateName(9) + '.' + ext);

            const category = mongoose.Types.ObjectId.isValid(form.category) ? form.category : null;
            const photoPosition = '';

            const tags = JSON.parse(form.hashtags || '[]')
                .filter(item => mongoose.Types.ObjectId.isValid(item));

            await sharp(obj.path).resize({ height: 125, width: 125 }).toFile(smallName);

            const photoAdded = await new PhotoModel(<IPhoto> {
                photoPosition: photoPosition,
                path: path.basename(obj.path),
                tinyPath: path.basename(smallName),
                category: category,
                tags: tags,
                size: obj.size,
                date: moment().utc().toDate()
            }).save();

            const photoId = photoAdded._id;
            for (let i = 0; i < tags.length; i++) {
                await HashtagModel.updateOne({_id: tags[i]}, {$push: {photos: photoId}});
            }
            if (category) {
                await CategoryModel.updateOne({_id: category}, {$push: {photos: photoId}});
            }
        } else {
            throw "Не удалось загрузить изображение";
        }
    }

    static async all() {
       return await PhotoModel.find({}).populate('category').sort('-date').lean();
    }

    static async photoById(id) {
        return await PhotoModel
            .findById(id)
            .populate('category', 'name _id')
            .populate('tags', 'tag _id')
            .lean();
    }

    static async updateOne(form) {

        const updatingPhotoId = form._id;

        const formTags = (form.tags || []).map(item => mongoose.Types.ObjectId(item));
        const formCategory = (form.category && form.category !== '0' && mongoose.Types.ObjectId.isValid(form.category)) ? mongoose.Types.ObjectId(form.category) : null;

        const updateDoc = PhotoModel.updateOne({ _id: updatingPhotoId }, { tags: formTags, category: formCategory });
        const deleteOldHashTag = HashtagModel.updateMany({ photos: updatingPhotoId }, { $pull: { photos: updatingPhotoId }});
        const updateNewHashTag = HashtagModel.updateMany({_id: { $in: formTags }}, {$push: {photos: updatingPhotoId}});

        const updateCategory = [];
        const deleteOldCategory = CategoryModel.updateMany({ photos: updatingPhotoId }, { $pull: { photos: updatingPhotoId }});
        updateCategory.push(deleteOldCategory);

        if (formCategory) {
            const updateNewCategory = CategoryModel.updateOne({ _id: formCategory }, { $push: {photos: updatingPhotoId} });
            updateCategory.push(updateNewCategory);
        }

        return await Promise.all([updateDoc, deleteOldHashTag, updateNewHashTag, ...updateCategory]);
    }

    static async deletePhoto(id) {

        const beforeDelete = await PhotoModel.findById(id).lean();
        const img1 = beforeDelete.path;
        const img2 = beforeDelete.tinyPath;

        const formTags = (beforeDelete.tags || []).map(item => mongoose.Types.ObjectId(item));

        const delFromCategories = CategoryModel.updateMany({photos: id}, { $pull: { photos: id } });
        const deleteFromTags = HashtagModel.updateMany({_id: { $in: formTags }}, {$pull: {photos: id}});

        const img1Path = path.join(__dirname, '..', '..', '..', '..', 'uploads', img1);
        const img2Path = path.join(__dirname, '..', '..', '..', '..', 'uploads', img2);

        const deletePic1 = promiseUnlink(img1Path);
        const deletePic2 = promiseUnlink(img2Path);

        const deletePhoto = PhotoModel.deleteOne({_id: id});

        const promises = [deleteFromTags, delFromCategories, deletePhoto, deletePic1, deletePic2];

        await Promise.all(promises);
        return true;
    }

}