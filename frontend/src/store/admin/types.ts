import {ErrorMessage, LoadingStatus} from "../../interfaces/storage.interface";

export interface AdminState {
    readonly adminLogin: LoadingStatus;
    readonly user: AdminUserState | null;

}

export interface AdminUserState {
    readonly username: string | null;
    readonly token: string | null;
}

export enum AdminActionType {

    MAKE_LOGIN = "MAKE_LOGIN",
    MAKE_LOGIN_SUCCESS = "MAKE_LOGIN_SUCCESS",
    MAKE_LOGIN_ERROR = "MAKE_LOGIN_ERROR",

    MAKE_LOGOUT = "MAKE_LOGOUT"
}

export interface FormAdminLogin {
    username: string | null;
    password: string | null;
}


export type AdminActions =
    { type: AdminActionType.MAKE_LOGIN_ERROR, payload: ErrorMessage } |
    { type: AdminActionType.MAKE_LOGIN, payload: FormAdminLogin } |
    { type: AdminActionType.MAKE_LOGIN_SUCCESS, payload: AdminUserState } |

    { type: AdminActionType.MAKE_LOGOUT };
