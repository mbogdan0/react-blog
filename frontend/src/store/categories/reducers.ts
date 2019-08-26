import {CategoryActions, CategoryActionType, StateCategory} from "./types";

const initialState: StateCategory = {
    status: null,
    data: []
};

export const categoriesReducer = (state = initialState, action: CategoryActions): StateCategory => {

    switch (action.type) {
        case CategoryActionType.GET_CATEGORIES: {
            return {
                ...state,
                status: true
            };
        }

        case CategoryActionType.GET_CATEGORIES_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                status: error
            };
        }

        case CategoryActionType.GET_CATEGORIES_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                status: null,
                data
            };
        }

        default:
            return state;

    }
};
