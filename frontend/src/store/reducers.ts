import { combineReducers } from "redux";
import {adminReducer} from "./admin/reducers";
import {hashtagReducer} from "./hashtags/reducers";
import {categoriesReducer} from "./categories/reducers";
import {photosReducer} from "./photos/reducers";
import {connectRouter} from 'connected-react-router';
import { History } from 'history';


const rootReducer = (history: History) => combineReducers({
    admin: adminReducer,
    hashtags: hashtagReducer,
    categories: categoriesReducer,
    photos: photosReducer,
    router: connectRouter(history)
});


export type AppState = ReturnType< ReturnType<typeof rootReducer> >; // magic

export default rootReducer;