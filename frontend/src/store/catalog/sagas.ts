import {CatalogActionType} from "./types";
import {put, takeEvery, call} from "redux-saga/effects";
import {loadMainPagePhotosError, loadMainPagePhotosSuccess} from "./actions";
import {getPhotosMainPage} from "../../services/user/photos";
import {PictureLight} from "../../interfaces/picture";


function* loadMainPhotosSaga(obj: any) {
    try {
        const data: PictureLight[] = yield call(getPhotosMainPage, {category: obj.payload});
        yield put(loadMainPagePhotosSuccess(data));
    } catch (e) {
        yield put(loadMainPagePhotosError(e.toString()));
    }
}



export const catalogSagas = [
    takeEvery(CatalogActionType.LOAD_MAIN_PAGE_PHOTOS, loadMainPhotosSaga)
];