import {makeLoginError, makeLoginSuccess,} from "./actions";
import {takeEvery, put, call, cancelled, take, fork, cancel} from 'redux-saga/effects';
import {adminAuthService} from "../../services/admin/auth";
import {AdminActionType, AdminUserState, FormAdminLogin} from "./types";
import {delLSUser, setLSUser} from "../../utils/helpers/keep-token";
import {push} from "connected-react-router";


export function* loginFlowSaga() {
    while (true) {
        const { payload } = yield take(AdminActionType.MAKE_LOGIN);
        const task = yield fork(authorizeSaga, payload);
        const action = yield take([AdminActionType.MAKE_LOGOUT, AdminActionType.MAKE_LOGIN_ERROR]);
        if (action.type === AdminActionType.MAKE_LOGOUT) {
            yield cancel(task);
            yield delLSUser();
        }
    }
}

function* authorizeSaga(payload: FormAdminLogin) {
    try {
        const data: AdminUserState = yield call(adminAuthService, payload);
        yield put(makeLoginSuccess(data));
        yield setLSUser(data);
        yield put(push('/admin/main'));
        return data;
    } catch (error) {
        yield put(makeLoginError(error.toString()));
    } finally {
        if (yield cancelled()) {
            console.log('CANCELLED'); // TODO
        }
    }
}


function* makeLogoutSaga() {
    yield delLSUser();
}

export const adminSagas = [
    takeEvery(AdminActionType.MAKE_LOGOUT, makeLogoutSaga),
    fork(loginFlowSaga)
];

