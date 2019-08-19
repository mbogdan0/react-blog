import {AdminUserState, FormAdminLogin} from "../../store/admin/types";
import {URLS} from "../api.constants";
import {$post} from "../../utils/helpers/fetch";
import {ApiResponse} from "../../interfaces/api.interface";


export const adminAuthService = async (payload: FormAdminLogin): Promise<AdminUserState> => {
    let post: ApiResponse<AdminUserState>;
    try {
        post = await $post(URLS.LOGIN_URL, payload);
        if (post.success) {
            return post.data;
        } else {
            throw post.error ? post.error.toString() : 'Error';
        }
    } catch (e) {
        return e.toString();
    }
};

