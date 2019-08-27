import {all} from "redux-saga/effects";
import {adminSagas} from "./admin/sagas";
import {hashtagSagas} from "./hashtags/sagas";
import {categorySagas} from "./categories/sagas";
import {photosSagas} from "./photos/sagas";
import {catalogSagas} from "./catalog/sagas";


export default function* rootSaga () {
    yield all([
        ...adminSagas,
        ...hashtagSagas,
        ...categorySagas,
        ...photosSagas,
        ...catalogSagas
    ]);
}

