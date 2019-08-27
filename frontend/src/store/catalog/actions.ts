import {CatalogActions, CatalogActionType} from "./types";
import {PictureLight} from "../../interfaces/picture";


export const loadMainPagePhotos = (payload: string): CatalogActions => ({
    type: CatalogActionType.LOAD_MAIN_PAGE_PHOTOS, payload
});

export const loadMainPagePhotosSuccess = (payload: PictureLight[]): CatalogActions => ({
    type: CatalogActionType.LOAD_MAIN_PAGE_PHOTOS_SUCCESS, payload
});

export const loadMainPagePhotosError = (payload: string | null): CatalogActions => ({
    type: CatalogActionType.LOAD_MAIN_PAGE_PHOTOS_ERROR, payload: { error: payload }
});
