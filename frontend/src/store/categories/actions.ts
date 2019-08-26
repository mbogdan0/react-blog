import {Category} from "../../interfaces/category";
import {CategoryActions, CategoryActionType} from "./types";


export const getCategories = (): CategoryActions => ({
   type: CategoryActionType.GET_CATEGORIES
});

export const getCategoriesSuccess = (payload: Category[]): CategoryActions => ({
    type: CategoryActionType.GET_CATEGORIES_SUCCESS,
    payload
});

export const getCategoriesError = (payload: string | null): CategoryActions => ({
    type: CategoryActionType.GET_CATEGORIES_ERROR,
    payload: {error: payload}
});
