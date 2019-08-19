import { combineReducers } from "redux";
import {adminReducer} from "./admin/reducers";


const rootReducer = combineReducers({
    admin: adminReducer
});

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;