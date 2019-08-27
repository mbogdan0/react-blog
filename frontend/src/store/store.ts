import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./rootSaga";
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from './reducers';


const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();


export default createStore(
        createRootReducer(history),
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware
            ),
        ),
);

sagaMiddleware.run(rootSaga);
