
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
