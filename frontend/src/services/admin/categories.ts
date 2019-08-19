import {ApiResponse} from "../../interfaces/api.interface";
import {URLS} from "../api.constants";
import {$get} from "../../utils/helpers/fetch";
import {Category} from "../../interfaces/category";


export const adminGetCategories = async (): Promise<Category[]> => {
    const data: ApiResponse<Category[]> = await $get(URLS.CATEGORY);
    if (data.success) {
        return data.data;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};