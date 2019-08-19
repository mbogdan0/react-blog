import {AdminActionType, AdminActionTypes, FormAdminLogin} from "./types";
import {Dispatch} from "redux";
import {adminAuthService} from "../../services/admin/auth";
import {delLSUser} from "../../utils/helpers/keep-token";
import {adminAddHashTag, adminDeleteHashtag, adminGetHashTags} from "../../services/admin/hashtags";
import {adminUploadPhoto} from "../../services/admin/photos";
import {adminGetCategories} from "../../services/admin/categories";


export const makeLogin = (payload: FormAdminLogin) => (dispatch: Dispatch<AdminActionTypes>) => {
    dispatch({type: AdminActionType.MAKE_LOGIN, payload});

    adminAuthService(payload).then(userData => {
        dispatch({
            type: AdminActionType.MAKE_LOGIN_SUCCESS,
            payload: userData
        });
    }).catch(errorData => {
        dispatch({
            type: AdminActionType.MAKE_LOGIN_ERROR,
            payload: {
                loginError: errorData.toString()
            }
        });
    });
};

export const makeLogout = () => (dispatch: Dispatch<AdminActionTypes>) => {
    delLSUser();
    dispatch({
        type: AdminActionType.MAKE_LOGOUT
    });
};


export const loadHashtags = () => (dispatch: Dispatch<AdminActionTypes>) => {
    adminGetHashTags().then(data => {
        dispatch({
            type: AdminActionType.LOAD_HASHTAGS,
            payload: data
        });
    }).catch(err => {
        dispatch({
            type: AdminActionType.LOAD_HASHTAGS_ERROR,
            payload: { loadError: err.toString() }
        });
    });
};



export const addHashTag = (form: {tag: string}) => (dispatch: Dispatch<AdminActionTypes>) => {
    dispatch({type: AdminActionType.ADD_HASHTAG, payload: form});

    adminAddHashTag(form).then(() => {
        dispatch({type: AdminActionType.ADD_HASHTAG_SUCCESS});

        adminGetHashTags().then(data => {
            dispatch({
                type: AdminActionType.LOAD_HASHTAGS,
                payload: data
            });
        }).catch(err => {
            dispatch({
                type: AdminActionType.LOAD_HASHTAGS_ERROR,
                payload: { loadError: err.toString() }
            });
        });

    }).catch(errorData => {
        dispatch({
            type: AdminActionType.ADD_HASHTAG_ERROR,
            payload: { addError: errorData.toString() }
        });
    });
};

export const deleteHashtag = (id: string) => (dispatch: Dispatch<AdminActionTypes>) => {
    adminDeleteHashtag(id).then(() => {
        dispatch({
            type: AdminActionType.DELETE_HASHTAG,
            payload: { id }
        });
    }).catch(err => {
        dispatch({
            type: AdminActionType.DELETE_HASHTAG_ERROR,
            payload: { deleteError: err.toString() }
        });
    });
};

export const uploadPhoto = (form: FormData) => (dispatch: Dispatch<AdminActionTypes>) => {

    adminUploadPhoto(form).then(() => {
        console.log('ok');
    }).catch(console.error);

};

export const getCategories = () => (dispatch: Dispatch<AdminActionTypes>) => {

    adminGetCategories().then(data => {
        dispatch({
            type: AdminActionType.GET_CATEGORIES,
            payload: data
        });
    }).catch(console.error);
};