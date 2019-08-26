import {ApiResponse} from "../../interfaces/api.interface";
import {$delete, $get, $post} from "../../utils/helpers/fetch";
import {URLS} from "../api.constants";
import {Hashtag} from "../../interfaces/hashtag";

export const adminAddHashTag = async (payload: {tag: string}): Promise<boolean>  => {
    let post: ApiResponse<any> = await $post(URLS.HASHTAGS, payload);
    if (post.success) {
        return true;
    } else {
        throw post.error ? post.error.toString() : 'Error';
    }
};

export const adminGetHashTags = async (): Promise<Hashtag[]> => {
    const data: ApiResponse<Hashtag[]> = await $get(URLS.HASHTAGS);
    if (data.success) {
        return data.data;
    } else {
        throw data.error ? data.error.toString() : 'Error';
    }
};

export const adminDeleteHashtag = async (id: string): Promise<boolean> => {
    const del: ApiResponse<any> = await $delete(URLS.HASHTAGS + '/' + id);
    if (del.success) {
        return true;
    } else {
        throw del.error ? del.error.toString() : 'Error';
    }
};