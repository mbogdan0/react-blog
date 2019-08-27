import {PictureLight} from "../../interfaces/picture";
import {ErrorMessage, LoadingStatus} from "../../interfaces/storage.interface";


export interface CatalogState {
    readonly photosOnMainPage: PictureLight[];
    readonly loadingMainPage: LoadingStatus;
}



export enum CatalogActionType {
    LOAD_MAIN_PAGE_PHOTOS = "LOAD_MAIN_PAGE_PHOTOS",
    LOAD_MAIN_PAGE_PHOTOS_SUCCESS = "LOAD_MAIN_PAGE_PHOTOS_SUCCESS",
    LOAD_MAIN_PAGE_PHOTOS_ERROR = "LOAD_MAIN_PAGE_PHOTOS_ERROR"
}

export type CatalogActions =
    { type: CatalogActionType.LOAD_MAIN_PAGE_PHOTOS, payload: string } |
    { type: CatalogActionType.LOAD_MAIN_PAGE_PHOTOS_SUCCESS, payload: PictureLight[] } |
    { type: CatalogActionType.LOAD_MAIN_PAGE_PHOTOS_ERROR, payload: ErrorMessage }