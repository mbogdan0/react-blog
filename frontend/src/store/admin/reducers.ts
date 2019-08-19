import {AdminActionType, AdminActionTypes, AdminState} from "./types";
import {getLSUser, setLSUser} from "../../utils/helpers/keep-token";
import {Category} from "../../interfaces/category";

const initialState: AdminState = {
    adminLogin: {
        isLoginLoading: false,
        loginError: null,
    },
    user: getLSUser(),
    hashtags: {
        addLoading: false,
        addError: null,
        deleteError: null,
        loadError: null,
        data: []
    },
    categories: []
};


export const adminReducer = (state = initialState, action: AdminActionTypes): AdminState => {

    switch (action.type) {

        case AdminActionType.MAKE_LOGOUT: {
            return {...state, user: null};
        }

        case AdminActionType.MAKE_LOGIN: {
            return {...state, adminLogin: {isLoginLoading: true, loginError: null}};
        }

        case AdminActionType.MAKE_LOGIN_ERROR: {
            const {loginError} = action.payload;
            return {...state, adminLogin: {isLoginLoading: false, loginError}}
        }

        case AdminActionType.MAKE_LOGIN_SUCCESS: {
            const {username, token} = action.payload;

            setLSUser({username, token});

            return {
                ...state,
                user: {
                    username,
                    token,
                    ...state.user
                },
                adminLogin: {isLoginLoading: false, loginError: null}
            }
        }

        case AdminActionType.ADD_HASHTAG: {
            return {
                ...state,
                hashtags: {
                    ...state.hashtags,
                    addLoading: true,
                    addError: null
                }
            };
        }

        case AdminActionType.ADD_HASHTAG_SUCCESS: {
            return {
                ...state,
                hashtags: {
                    ...state.hashtags,
                    addLoading: false,
                    addError: null
                }
            };
        }

        case AdminActionType.ADD_HASHTAG_ERROR: {
            const { addError } = action.payload;
            return {
                ...state,
                hashtags: {
                    ...state.hashtags,
                    addLoading: false,
                    addError
                }
            };
        }

        case AdminActionType.LOAD_HASHTAGS: {
            const data = action.payload;
            return {
                ...state,
                hashtags: {
                    ...state.hashtags,
                    loadError: null,
                    data
                }
            };
        }

        case AdminActionType.LOAD_HASHTAGS_ERROR: {
            const {loadError} = action.payload;
            return {
                ...state,
                hashtags: {
                    ...state.hashtags,
                    loadError
                }
            };
        }

        case AdminActionType.DELETE_HASHTAG: {
            const {id} = action.payload;
            return {
                ...state,
                hashtags: {
                    ...state.hashtags,
                    deleteError: null,
                    data: state.hashtags.data.filter(item => item._id !== id)
                }
            }
        }

        case AdminActionType.DELETE_HASHTAG_ERROR: {
            const {deleteError} = action.payload;
            return {
                ...state,
                hashtags: {
                    ...state.hashtags,
                    deleteError
                }
            }
        }

        case AdminActionType.GET_CATEGORIES: {
            const categories = action.payload;
            return {
                ...state,
                categories
            };
        }

        default:
            return state;
    }

};
