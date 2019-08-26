import {ApiResponse} from "../../interfaces/api.interface";
import {URLS} from "../api.constants";
import {$delete, $get, $post, $postFile} from "../../utils/helpers/fetch";
import {Picture} from "../../interfaces/picture";
import {GetById} from "../../interfaces/storage.interface";
import {UpdatePicture} from "../../interfaces/updatePicture";


export const adminUploadPhoto = async (form: FormData): Promise<boolean> => {
    const data: ApiResponse<any> = await $postFile(URLS.PHOTO_UPLOAD, form);
    if (data.success) {
        return true;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};

export const adminAllPhotos = async (): Promise<Picture[]> => {
    const data: ApiResponse<Picture[]> = await $get(URLS.PHOTO_ALL);
    if (data.success) {
        return data.data;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};

export const adminOnePhoto = async (obj: GetById): Promise<Picture> => {
    const data: ApiResponse<Picture> = await $get(URLS.PHOTO_BY_ID + '/' + obj.id);
    if (data.success) {
        return data.data;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};

export const adminOnePhotoUpdate = async (payload: UpdatePicture): Promise<boolean> => {
    const data: ApiResponse<any> = await $post(URLS.PHOTO_ONE_UPDATE, payload);
    if (data.success) {
        return true;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};

export const adminDeleteOnePhoto = async (payload: GetById): Promise<boolean> => {
    const data: ApiResponse<any> = await $delete(URLS.PHOTO_BY_ID + '/' + payload.id);
    if (data.success) {
        return true;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};
