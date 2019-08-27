import { createSelector } from 'reselect';
import {AppState} from "./reducers";
import {StateHashtags} from "./hashtags/types";
import {StateCategory} from "./categories/types";
import {StatePhotos} from "./photos/types";
import {AdminState} from "./admin/types";
import {RouterState} from "connected-react-router";
import {CatalogState} from "./catalog/types";



export const getAdminState = (store: AppState): AdminState => store.admin;
export const getRouter = (store: AppState): RouterState => store.router;

export const getCatalog = (store: AppState): CatalogState => store.catalog;

export const getHashtagsState = (store: AppState): StateHashtags => store.hashtags;
export const getCategoriesState = (store: AppState): StateCategory => store.categories;
export const getPhotosState = (store: AppState): StatePhotos => store.photos;

export const getAdminLoginForm = createSelector(getAdminState, admin => admin.adminLogin);
export const getAdminUser = createSelector(getAdminState, admin => admin.user);

export const getAdminAuth = createSelector(getAdminState, admin => {
    if (admin.user !== null) {
        return !!admin.user.token;
    } else {
        return false;
    }
});

export const getAdminPhotos = createSelector(getPhotosState, photos => photos.allPhotosAdmin);
export const getAdminPhotoDetailPage = createSelector(getPhotosState, photos => photos.detailPhotoPage);
export const getAdminPhotoUpdateDetail = createSelector(getPhotosState, photos => photos.updatingPhoto);
export const getAdmonPhotoDeleting = createSelector(getPhotosState, photos => photos.deletingPhoto);
