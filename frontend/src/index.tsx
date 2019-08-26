import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {AppRouter} from "./modules/AppRouter";
import { Provider } from "react-redux";
import configureStore from "./store/store";

import './index.scss';


ReactDOM.render(<Provider store={configureStore}>
    <AppRouter />
</Provider>, document.getElementById('root'));


serviceWorker.unregister();
