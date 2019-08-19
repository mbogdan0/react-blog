import {ApiResponse} from "../../interfaces/api.interface";
import {URLS} from "../api.constants";
import {$postFile} from "../../utils/helpers/fetch";


export const adminUploadPhoto = async (form: FormData): Promise<boolean> => {
    const data: ApiResponse<any> = await $postFile(URLS.PHOTO_UPLOAD, form);
    if (data.success) {
        return true;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};