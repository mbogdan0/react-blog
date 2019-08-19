import {Hashtag} from "../../interfaces/hashtag";
import {Category} from "../../interfaces/category";
import {UploadPicture} from "../../interfaces/uploadPicture";

export interface AdminState {
    readonly adminLogin: AdminLoginForm;
    readonly user: AdminUserState | null;
    readonly hashtags: AdminHashtags;
    readonly categories: Category[];
}

export interface AdminHashtags {
    readonly addLoading: boolean;
    readonly addError: string | null;
    readonly loadError: string | null;
    readonly deleteError: string | null;
    readonly data: Hashtag[];
}

export interface AdminUserState {
    readonly username: string | null;
    readonly token: string | null;
}

export interface AdminLoginForm {
    readonly isLoginLoading: boolean;
    readonly loginError: string | null;
}



export enum AdminActionType {
    MAKE_LOGIN = "MAKE_LOGIN",
    MAKE_LOGIN_SUCCESS = "MAKE_LOGIN_SUCCESS",
    MAKE_LOGIN_ERROR = "MAKE_LOGIN_ERROR",

    MAKE_LOGOUT = "MAKE_LOGOUT",

    ADD_HASHTAG = "ADD_HASHTAG",
    ADD_HASHTAG_SUCCESS = "ADD_HASHTAG_SUCCESS",
    ADD_HASHTAG_ERROR = "ADD_HASHTAG_ERROR",

    LOAD_HASHTAGS = "LOAD_HASHTAGS",
    LOAD_HASHTAGS_ERROR = "LOAD_HASHTAGS_ERROR",

    DELETE_HASHTAG = "DELETE_HASHTAG",
    DELETE_HASHTAG_ERROR = "DELETE_HASHTAG_ERROR",

    UPLOAD_PHOTO = "UPLOAD_PHOTO",
    UPLOAD_PHOTO_SUCCESS = "UPLOAD_PHOTO_SUCCESS",
    UPLOAD_PHOTO_ERROR = "UPLOAD_PHOTO_ERROR",

    GET_CATEGORIES = "GET_CATEGORIES"

}


export interface MakeLoginAction {
    type: AdminActionType.MAKE_LOGIN,
    payload: FormAdminLogin
}

export interface FormAdminLogin {
    username: string | null;
    password: string | null;
}


export interface MakeLoginActionError {
    type: AdminActionType.MAKE_LOGIN_ERROR,
    payload: {
        loginError: string | null;
    }
}

export interface MakeLoginActionSuccess {
    type: AdminActionType.MAKE_LOGIN_SUCCESS,
    payload: AdminUserState
}

export interface MakeLogout {
    type: AdminActionType.MAKE_LOGOUT
}

export interface AddHashtag {
    type: AdminActionType.ADD_HASHTAG,
    payload: {
        tag: string
    }
}

export interface AddHashTagSuccess {
    type: AdminActionType.ADD_HASHTAG_SUCCESS
}

export interface AddHashTagError {
    type: AdminActionType.ADD_HASHTAG_ERROR,
    payload: {
        addError: string | null
    }
}

export interface LoadHashtags {
    type: AdminActionType.LOAD_HASHTAGS,
    payload: Hashtag[]
}

export interface LoadHashtagsError {
    type: AdminActionType.LOAD_HASHTAGS_ERROR,
    payload: {
        loadError: string | null
    }
}

export interface DeleteHashtag {
    type: AdminActionType.DELETE_HASHTAG,
    payload: {
        id: string
    }
}

export interface DeleteHashtagError {
    type: AdminActionType.DELETE_HASHTAG_ERROR,
    payload: {
        deleteError: string | null
    }
}

export interface LoadCategories {
    type: AdminActionType.GET_CATEGORIES,
    payload: Category[]
}

export interface UploadPhoto {
    type: AdminActionType.UPLOAD_PHOTO,
    payload: UploadPicture;
}

export type AdminActionTypes =
    MakeLoginActionError |
    MakeLoginActionSuccess |
    MakeLoginAction |
    MakeLogout |
    AddHashtag |
    AddHashTagSuccess |
    AddHashTagError |
    LoadHashtags |
    LoadHashtagsError |
    DeleteHashtag |
    DeleteHashtagError |
    LoadCategories |
    UploadPhoto;