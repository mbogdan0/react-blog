import {call, put, takeEvery} from "redux-saga/effects";
import {adminAddHashTag, adminDeleteHashtag, adminGetHashTags} from "../../services/admin/hashtags";
import {Hashtag} from "../../interfaces/hashtag";
import {addHashTagError, addHashTagSuccess, deleteHashtagError, loadHashtagsError, loadHashtagsSuccess} from "./actions";
import {HashtagActionType} from "./types";

function* loadHashtagsSaga() {
    try {
        const data: Hashtag[] = yield call(adminGetHashTags);
        yield put(loadHashtagsSuccess(data))
    } catch (e) {
        yield put(loadHashtagsError(e.toString()));
    }
}

function* addHashTagSaga(payload: any) {
    try {
        yield call(adminAddHashTag, payload.payload);
        yield put(addHashTagSuccess());
        yield loadHashtagsSaga();

    } catch (e) {
        yield put(addHashTagError(e.toString()))
    }
}

function* deleteHashtagSaga(payload: any) {
    try {
        const {id} = payload.payload;
        yield call(adminDeleteHashtag, id);
        yield loadHashtagsSaga();
    } catch (e) {
        yield put(deleteHashtagError(e.toString()));
    }
}


export const hashtagSagas = [
    takeEvery(HashtagActionType.LOAD_HASHTAGS, loadHashtagsSaga),
    takeEvery(HashtagActionType.ADD_HASHTAG, addHashTagSaga),
    takeEvery(HashtagActionType.DELETE_HASHTAG, deleteHashtagSaga),
];