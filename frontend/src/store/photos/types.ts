import {UploadPicture} from "../../interfaces/uploadPicture";
import {Picture} from "../../interfaces/picture";
import {ErrorMessage, GetById, LoadingStatus} from "../../interfaces/storage.interface";
import {UpdatePicture} from "../../interfaces/updatePicture";


export interface StatePhotos {
    readonly allPhotosAdmin: {
        readonly status: LoadingStatus;
        readonly data: Picture[];
    };
    readonly addPhotosAdmin: LoadingStatus;
    readonly detailPhotoPage: {
        readonly status: LoadingStatus;
        readonly data: Picture | null;
    }
    readonly updatingPhoto: LoadingStatus;
    readonly deletingPhoto: LoadingStatus;
}


export enum PhotosActionType {

    UPLOAD_PHOTO = "UPLOAD_PHOTO",
    UPLOAD_PHOTO_SUCCESS = "UPLOAD_PHOTO_SUCCESS",
    UPLOAD_PHOTO_ERROR = "UPLOAD_PHOTO_ERROR",

    LOAD_ALL_PHOTOS = "LOAD_ALL_PHOTOS",
    LOAD_ALL_PHOTOS_SUCCESS = "LOAD_ALL_PHOTOS_SUCCESS",
    LOAD_ALL_PHOTOS_ERROR = "LOAD_ALL_PHOTOS_ERROR",

    DETAIL_PHOTO_PAGE = "DETAIL_PHOTO_PAGE",
    DETAIL_PHOTO_PAGE_SUCCESS = "DETAIL_PHOTO_PAGE_SUCCESS",
    DETAIL_PHOTO_PAGE_ERROR = "DETAIL_PHOTO_PAGE_ERROR",

    UPDATE_ONE_PHOTO = "UPDATE_ONE_PHOTO",
    UPDATE_ONE_PHOTO_ERROR = "UPDATE_ONE_PHOTO_ERROR",
    UPDATE_ONE_PHOTO_SUCCESS = "UPDATE_ONE_PHOTO_SUCCESS",

    DELETE_ONE_PHOTO = "DELETE_ONE_PHOTO",
    DELETE_ONE_PHOTO_ERROR = "DELETE_ONE_PHOTO_ERROR",
    DELETE_ONE_PHOTO_SUCCESS = "DELETE_ONE_PHOTO_SUCCESS",
    DELETE_ONE_PHOTO_REDIRECT = "DELETE_ONE_PHOTO_REDIRECT"
}


export type PhotosActions =

    { type: PhotosActionType.UPLOAD_PHOTO, payload: UploadPicture } |
    { type: PhotosActionType.UPLOAD_PHOTO_ERROR, payload: ErrorMessage } |
    { type: PhotosActionType.UPLOAD_PHOTO_SUCCESS } |

    { type: PhotosActionType.LOAD_ALL_PHOTOS } |
    { type: PhotosActionType.LOAD_ALL_PHOTOS_SUCCESS, payload: Picture[] } |
    { type: PhotosActionType.LOAD_ALL_PHOTOS_ERROR, payload: ErrorMessage } |

    { type: PhotosActionType.DETAIL_PHOTO_PAGE, payload: GetById } |
    { type: PhotosActionType.DETAIL_PHOTO_PAGE_SUCCESS, payload: Picture } |
    { type: PhotosActionType.DETAIL_PHOTO_PAGE_ERROR, payload: ErrorMessage } |

    { type: PhotosActionType.UPDATE_ONE_PHOTO, payload: UpdatePicture } |
    { type: PhotosActionType.UPDATE_ONE_PHOTO_SUCCESS } |
    { type: PhotosActionType.UPDATE_ONE_PHOTO_ERROR, payload: ErrorMessage} |

    { type: PhotosActionType.DELETE_ONE_PHOTO, payload: GetById } |
    { type: PhotosActionType.DELETE_ONE_PHOTO_ERROR, payload: ErrorMessage } |
    { type: PhotosActionType.DELETE_ONE_PHOTO_SUCCESS } |
    { type: PhotosActionType.DELETE_ONE_PHOTO_REDIRECT }
    ;
