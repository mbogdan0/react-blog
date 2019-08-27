import {useEffect} from "react";
import {Dispatch} from "redux";


export const useDispatchEffect = (actionFunc: any, dispatch: Dispatch) => {
    useEffect(() => {
        dispatch(actionFunc);
    }, [actionFunc, dispatch]);
};
