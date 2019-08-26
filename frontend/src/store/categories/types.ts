import {ErrorMessage, LoadingStatus} from "../../interfaces/storage.interface";
import {Category} from "../../interfaces/category";


export interface StateCategory {
    readonly status: LoadingStatus;
    readonly data: Category[];
}


export enum CategoryActionType {
    GET_CATEGORIES = "GET_CATEGORIES",
    GET_CATEGORIES_SUCCESS = "GET_CATEGORIES_SUCCESS",
    GET_CATEGORIES_ERROR = "GET_CATEGORY_ERROR"
}


export type CategoryActions =
    { type: CategoryActionType.GET_CATEGORIES } |
    { type: CategoryActionType.GET_CATEGORIES_SUCCESS, payload: Category[] } |
    { type: CategoryActionType.GET_CATEGORIES_ERROR, payload: ErrorMessage };
