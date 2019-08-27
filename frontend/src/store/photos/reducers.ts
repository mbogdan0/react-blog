import {PhotosActions, PhotosActionType, StatePhotos} from "./types";

const initialState: StatePhotos = {
    addPhotosAdmin: null,
    allPhotosAdmin: {
        status: null,
        data: []
    },
    detailPhotoPage: {
        status: null,
        data: null
    },
    updatingPhoto: null,
    deletingPhoto: null
};

export const photosReducer = (state = initialState, action: PhotosActions): StatePhotos => {

    switch (action.type) {
        case PhotosActionType.UPLOAD_PHOTO: {
            return {
                ...state,
                addPhotosAdmin: true
            };
        }

        case PhotosActionType.UPLOAD_PHOTO_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                addPhotosAdmin: error
            };
        }

        case PhotosActionType.UPLOAD_PHOTO_SUCCESS: {
            return {
                ...state,
                addPhotosAdmin: null
            };
        }

        case PhotosActionType.LOAD_ALL_PHOTOS: {
            return {
                ...state,
                allPhotosAdmin: {
                    ...state.allPhotosAdmin,
                    data: [],
                    status: true
                }
            };
        }

        case PhotosActionType.LOAD_ALL_PHOTOS_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                allPhotosAdmin: {
                    ...state.allPhotosAdmin,
                    status: error
                }
            };
        }

        case PhotosActionType.LOAD_ALL_PHOTOS_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                allPhotosAdmin: {
                    ...state.allPhotosAdmin,
                    status: null,
                    data
                }
            };
        }

        case PhotosActionType.DETAIL_PHOTO_PAGE: {
            return {
                ...state,
                detailPhotoPage: {
                    ...state.detailPhotoPage,
                    status: true,
                    data: null
                }
            };
        }

        case PhotosActionType.DETAIL_PHOTO_PAGE_SUCCESS: {
            const data = action.payload;
            return {
                ...state,
                detailPhotoPage: {
                    ...state.detailPhotoPage,
                    status: null,
                    data
                }
            };
        }

        case PhotosActionType.DETAIL_PHOTO_PAGE_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                detailPhotoPage: {
                    ...state.detailPhotoPage,
                    status: error
                }
            };
        }

        case PhotosActionType.UPDATE_ONE_PHOTO: {
            return {
                ...state,
                updatingPhoto: true
            };
        }

        case PhotosActionType.UPDATE_ONE_PHOTO_SUCCESS: {
            return {
                ...state,
                updatingPhoto: null
            };
        }

        case PhotosActionType.UPDATE_ONE_PHOTO_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                updatingPhoto: error
            };
        }

        case PhotosActionType.DELETE_ONE_PHOTO: {
            return {
                ...state,
                deletingPhoto: true
            };
        }

        case PhotosActionType.DELETE_ONE_PHOTO_ERROR: {
            const {error} = action.payload;
            return {
                ...state,
                deletingPhoto: error
            };
        }

        case PhotosActionType.DELETE_ONE_PHOTO_SUCCESS: {
            return {
                ...state,
                deletingPhoto: null
            };
        }

        default:
            return state;

    }
};
