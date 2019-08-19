import {AdminUserState} from "../../store/admin/types";

const LS_TOKEN_NAME = "auth-token";

export const getLSUser = (): AdminUserState => {
    const has = localStorage.getItem(LS_TOKEN_NAME);
    return has ? JSON.parse(has) : null;
};

export const isAuthOk = (): boolean => {
    const user = getLSUser();
    return user && !!user.token;
};

export const setLSUser = (val: AdminUserState): void => {
    const data = JSON.stringify(val);
    localStorage.setItem(LS_TOKEN_NAME, data);
};

export const delLSUser = (): void => {
    localStorage.removeItem(LS_TOKEN_NAME);
};
