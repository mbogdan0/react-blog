import {Picture} from "../../interfaces/picture";
import {UploadPicture} from "../../interfaces/uploadPicture";
import {PhotosActions, PhotosActionType} from "./types";
import {UpdatePicture} from "../../interfaces/updatePicture";

export const uploadPhoto = (payload: UploadPicture): PhotosActions => ({
    type: PhotosActionType.UPLOAD_PHOTO,
    payload
});

export const uploadPhotoSuccess = (): PhotosActions => ({
    type: PhotosActionType.UPLOAD_PHOTO_SUCCESS
});

export const uploadPhotoError = (error: string | null): PhotosActions => ({
    type: PhotosActionType.UPLOAD_PHOTO_ERROR,
    payload: { error }
});


export const loadAllPhotos = (): PhotosActions => ({
    type: PhotosActionType.LOAD_ALL_PHOTOS
});

export const loadAllPhotosSuccess = (payload: Picture[]): PhotosActions => ({
    type: PhotosActionType.LOAD_ALL_PHOTOS_SUCCESS,
    payload: payload
});

export const loadAllPhotosError = (error: string | null): PhotosActions => ({
    type: PhotosActionType.LOAD_ALL_PHOTOS_ERROR,
    payload: {error}
});


export const loadDetailPage = (id: string): PhotosActions => ({
    type: PhotosActionType.DETAIL_PHOTO_PAGE,
    payload: {id}
});

export const loadDetailPageSuccess = (data: Picture): PhotosActions => ({
    type: PhotosActionType.DETAIL_PHOTO_PAGE_SUCCESS,
    payload: data
});

export const loadDetailPageError = (error: string | null): PhotosActions => ({
    type: PhotosActionType.DETAIL_PHOTO_PAGE_ERROR,
    payload: {error}
});

export const updateOnePhoto = (data: UpdatePicture): PhotosActions => ({
    type: PhotosActionType.UPDATE_ONE_PHOTO,
    payload: data
});

export const updateOnePhotoError = (data: string | null): PhotosActions => ({
    type: PhotosActionType.UPDATE_ONE_PHOTO_ERROR,
    payload: {error: data}
});

export const updateOnePhotoSuccess = (): PhotosActions => ({
    type: PhotosActionType.UPDATE_ONE_PHOTO_SUCCESS
});

export const deleteOnePhoto = (id: string): PhotosActions => ({
    type: PhotosActionType.DELETE_ONE_PHOTO,
    payload: {id}
});

export const deleteOnePhotoError = (data: string | null): PhotosActions => ({
    type: PhotosActionType.DELETE_ONE_PHOTO_ERROR,
    payload: {error: data}
});

export const deleteOnePhotoSuccess = (): PhotosActions => ({
    type: PhotosActionType.DELETE_ONE_PHOTO_SUCCESS
});
