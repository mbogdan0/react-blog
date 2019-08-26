import {call, put, takeEvery} from "redux-saga/effects";
import {adminGetCategories} from "../../services/admin/categories";
import {Category} from "../../interfaces/category";
import {getCategoriesError, getCategoriesSuccess} from "./actions";
import {CategoryActionType} from "./types";


function* getCategoriesSaga() {
    try {
        const data: Category[] = yield call(adminGetCategories);
        yield put(getCategoriesSuccess(data))
    } catch (e) {
        yield put(getCategoriesError(e.toString()));
    }
}

export const categorySagas = [
    takeEvery(CategoryActionType.GET_CATEGORIES, getCategoriesSaga)
];