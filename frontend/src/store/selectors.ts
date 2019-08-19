import { createSelector } from 'reselect';
import {AppState} from "./reducers";
import {AdminState} from "./admin/types";

export const getAdminState = (store: AppState): AdminState => store.admin;

export const getAdminLoginForm = createSelector(getAdminState, admin => admin.adminLogin);

export const getAdminAuth = createSelector(getAdminState, admin => {
    if (admin.user !== null) {
        return !!admin.user.token;
    } else {
        return false;
    }
});

export const getAdminHashtags = createSelector(getAdminState, admin => admin.hashtags);

export const getAdminCategories = createSelector(getAdminState, admin => admin.categories);
