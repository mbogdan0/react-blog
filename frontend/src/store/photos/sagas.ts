import {call, put, takeEvery} from "redux-saga/effects";
import {adminAllPhotos, adminDeleteOnePhoto, adminOnePhoto, adminOnePhotoUpdate, adminUploadPhoto} from "../../services/admin/photos";
import {Picture} from "../../interfaces/picture";
import {
    deleteOnePhotoError, deleteOnePhotoSuccess,
    loadAllPhotosError, loadAllPhotosSuccess, loadDetailPageError, loadDetailPageSuccess, updateOnePhotoError, updateOnePhotoSuccess,
    uploadPhotoError,
    uploadPhotoSuccess
} from "./actions";
import {PhotosActionType} from "./types";


function* uploadPhotoSaga(payload: any) {
    try {
        const form = payload.payload;
        yield call(adminUploadPhoto, form);
        yield put(uploadPhotoSuccess());
        yield loadAllPhotosSaga();
    } catch (e) {
        yield put(uploadPhotoError(e.toString()));
    }
}

function* loadAllPhotosSaga() {
    try {
        const data: Picture[] = yield call(adminAllPhotos);
        yield put(loadAllPhotosSuccess(data));
    } catch (e) {
        yield put(loadAllPhotosError(e.toString()));
    }
}

function* loadDetailPageSaga(obj: any) {
    try {
        const data: Picture = yield call(adminOnePhoto, obj.payload);
        yield put(loadDetailPageSuccess(data));
    } catch (e) {
        yield put(loadDetailPageError(e.toString()));
    }
}

function* updateDetailPhotoSaga(obj: any) {
    try {
        yield call(adminOnePhotoUpdate, obj.payload);
        yield put(updateOnePhotoSuccess());
    } catch (e) {
        yield put(updateOnePhotoError(e.toString()))
    }
}

function* deleteOnePhotoSaga(obj: any) {
    try {
        yield call(adminDeleteOnePhoto, obj.payload);
        yield put(deleteOnePhotoSuccess());
    } catch (e) {
        yield put(deleteOnePhotoError(e.toString()));
    }
}

export const photosSagas = [
    takeEvery(PhotosActionType.LOAD_ALL_PHOTOS, loadAllPhotosSaga),
    takeEvery(PhotosActionType.UPLOAD_PHOTO, uploadPhotoSaga),
    takeEvery(PhotosActionType.DETAIL_PHOTO_PAGE, loadDetailPageSaga),
    takeEvery(PhotosActionType.UPDATE_ONE_PHOTO, updateDetailPhotoSaga),
    takeEvery(PhotosActionType.DELETE_ONE_PHOTO, deleteOnePhotoSaga)
];