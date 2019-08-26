import {Hashtag} from "../../interfaces/hashtag";
import {HashtagActions, HashtagActionType} from "./types";


export const loadHashtags = (): HashtagActions => ({
    type: HashtagActionType.LOAD_HASHTAGS
});

export const loadHashtagsSuccess = (payload: Hashtag[]): HashtagActions => ({
    type: HashtagActionType.LOAD_HASHTAGS_SUCCESS,
    payload
});

export const loadHashtagsError = (payload: string | null): HashtagActions => ({
   type: HashtagActionType.LOAD_HASHTAGS_ERROR,
   payload: { error: payload }
});

export const addHashTag = (payload: {tag: string}): HashtagActions => ({
    type: HashtagActionType.ADD_HASHTAG,
    payload
});

export const addHashTagSuccess = (): HashtagActions => ({
    type: HashtagActionType.ADD_HASHTAG_SUCCESS
});

export const addHashTagError = (error: string | null): HashtagActions => ({
    type: HashtagActionType.ADD_HASHTAG_ERROR,
    payload: { error }
});



export const deleteHashtag = (id: string): HashtagActions => ({
    type: HashtagActionType.DELETE_HASHTAG,
    payload: { id }
});

export const deleteHashtagError = (error: string | null): HashtagActions => ({
    type: HashtagActionType.DELETE_HASHTAG_ERROR,
    payload: { error }
});

