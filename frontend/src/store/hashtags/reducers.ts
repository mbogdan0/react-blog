import {HashtagActions, HashtagActionType, StateHashtags} from "./types";


const initialState: StateHashtags = {
    add: null,
    load: {
        status: null,
        data: []
    },
    delete: null
};


export const hashtagReducer = (state = initialState, action: HashtagActions): StateHashtags => {
    switch (action.type) {
        case HashtagActionType.ADD_HASHTAG: {
            return {
                ...state,
                add: true
            };
        }
        case HashtagActionType.ADD_HASHTAG_SUCCESS: {
            return {
                ...state,
                add: null
            };
        }
        case HashtagActionType.ADD_HASHTAG_ERROR: {
            const { error } = action.payload;
            return {
                ...state,
                add: error
            };
        }

        case HashtagActionType.LOAD_HASHTAGS: {
            return {
                ...state,
                load: {
                    ...state.load,
                    status: true,
                    data: []
                }
            };
        }

        case HashtagActionType.LOAD_HASHTAGS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                load: {
                    ...state.load,
                    status: null,
                    data
                }
            };
        }

        case HashtagActionType.LOAD_HASHTAGS_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                load: {
                    ...state.load,
                    status: error
                }
            };
        }

        default:
            return state;

    }
};
