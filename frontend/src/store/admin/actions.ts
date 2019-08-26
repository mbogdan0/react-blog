import {AdminActionType, AdminActions, FormAdminLogin, AdminUserState} from "./types";



export const makeLoginAsync = (payload: FormAdminLogin): AdminActions =>
    ({type: AdminActionType.MAKE_LOGIN, payload});

export const makeLoginSuccess = (payload: AdminUserState): AdminActions =>
    ({type: AdminActionType.MAKE_LOGIN_SUCCESS, payload});

export const makeLoginError = (payload: string | null): AdminActions => {
    return {
        type: AdminActionType.MAKE_LOGIN_ERROR,
        payload: { error: payload }
    }
};
