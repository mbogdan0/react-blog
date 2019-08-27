
import {Category} from "./category";
import {Hashtag} from "./hashtag";


export interface Picture {
    _id: string;
    photoPosition?: string;
    path: string;
    tinyPath: string;
    category: Category;
    tags: Hashtag[];
    size: number;
    date: string;
}

export interface PictureLight {
    photoPosition: string;
    path: string;
    tinyPath: string;
    category: any;
    short_id: number;
}
