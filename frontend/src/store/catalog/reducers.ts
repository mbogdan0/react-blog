import {CatalogActions, CatalogActionType, CatalogState} from "./types";

const initialState: CatalogState = {
    loadingMainPage: null,
    photosOnMainPage: []
};

export const catalogReducer = (state = initialState, action: CatalogActions): CatalogState => {

    switch (action.type) {
        case CatalogActionType.LOAD_MAIN_PAGE_PHOTOS: {
            return {
                ...state,
                loadingMainPage: true
            };
        }

        case CatalogActionType.LOAD_MAIN_PAGE_PHOTOS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                loadingMainPage: null,
                photosOnMainPage: data
            }
        }

        case CatalogActionType.LOAD_MAIN_PAGE_PHOTOS_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                loadingMainPage: error
            }
        }

        default:
            return state;
    }
};