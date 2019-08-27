import React, {lazy} from "react";
import { Route } from "react-router-dom";
import WaitingComponent from "./shared/WaitingComponent";
import { ConnectedRouter } from 'connected-react-router'
import {history} from '../store/store';
import {Switch} from "react-router";

const Admin = lazy(() => import("./admin/Admin/Admin"));
const App = lazy(() => {
    return Promise.all([
        import("./app/App/App"), // to show Loading component not less than 200ms
        new Promise(resolve => setTimeout(resolve, 100))
    ])
        .then(([moduleExports]) => moduleExports);
});


export const AppRouter: React.FC = () => {
    const mainRoutes = ['/', '/fashion', '/advs', '/travel', '/wedding', '/contacts'];

    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path={mainRoutes} exact component={WaitingComponent(App)} />
                <Route path="/admin" component={WaitingComponent(Admin)} />
            </Switch>
        </ConnectedRouter>

    );
};

