import {AdminActions, AdminActionType, AdminState} from "./types";
import {getLSUser} from "../../utils/helpers/keep-token";


const initialState: AdminState = {
    adminLogin: null,
    user: getLSUser()
};


export const adminReducer = (state = initialState, action: AdminActions): AdminState => {

    switch (action.type) {

        case AdminActionType.MAKE_LOGOUT: {
            return {...state, user: null};
        }

        case AdminActionType.MAKE_LOGIN: {
            return {...state, adminLogin: true};
        }

        case AdminActionType.MAKE_LOGIN_ERROR: {
            const {error} = action.payload;
            return {...state, adminLogin: error}
        }

        case AdminActionType.MAKE_LOGIN_SUCCESS: {
            const {username, token} = action.payload;
            return {
                ...state,
                user: {
                    ...state.user,
                    username,
                    token
                },
                adminLogin: null
            }
        }

        default:
            return state;
    }

};
