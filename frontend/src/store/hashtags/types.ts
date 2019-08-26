import {Hashtag} from "../../interfaces/hashtag";
import {ErrorMessage, GetById, LoadingStatus} from "../../interfaces/storage.interface";


export interface StateHashtags {
    readonly add: LoadingStatus;
    readonly load: {
        readonly status: LoadingStatus;
        readonly data: Hashtag[];
    }
    readonly delete: LoadingStatus;
}


export enum HashtagActionType {
    LOAD_HASHTAGS = "LOAD_HASHTAGS",
    LOAD_HASHTAGS_SUCCESS = "LOAD_HASHTAGS_SUCCESS",
    LOAD_HASHTAGS_ERROR = "LOAD_HASHTAGS_ERROR",

    ADD_HASHTAG = "ADD_HASHTAG",
    ADD_HASHTAG_SUCCESS = "ADD_HASHTAG_SUCCESS",
    ADD_HASHTAG_ERROR = "ADD_HASHTAG_ERROR",


    DELETE_HASHTAG = "DELETE_HASHTAG",
    DELETE_HASHTAG_ERROR = "DELETE_HASHTAG_ERROR",
}


export type HashtagActions =

    { type: HashtagActionType.DELETE_HASHTAG_ERROR, payload: ErrorMessage } |
    { type: HashtagActionType.DELETE_HASHTAG, payload: GetById } |

    { type: HashtagActionType.ADD_HASHTAG, payload: {tag: string} } |
    { type: HashtagActionType.ADD_HASHTAG_SUCCESS } |
    { type: HashtagActionType.ADD_HASHTAG_ERROR, payload: ErrorMessage } |

    { type: HashtagActionType.LOAD_HASHTAGS } |
    { type: HashtagActionType.LOAD_HASHTAGS_SUCCESS, payload: Hashtag[] } |
    { type: HashtagActionType.LOAD_HASHTAGS_ERROR, payload: ErrorMessage };
