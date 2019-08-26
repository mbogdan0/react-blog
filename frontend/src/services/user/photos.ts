import {Picture} from "../../interfaces/picture";
import {$post} from "../../utils/helpers/fetch";
import {URLS} from "../api.constants";
import {ApiResponse} from "../../interfaces/api.interface";


export const getPhotosMainPage = async (obj: any): Promise<Picture[]> => {
    const data: ApiResponse<Picture[]> = await $post(URLS.USER_MAIN_PAGE_PHOTOS, obj);
    if (data.success) {
        return data.data;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};