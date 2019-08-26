import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminHashTags from "./AdminHashTags/AdminHashTags";
import AdminLogout from "./AdminLogout/AdminLogout";
import PrivateRoute from "../shared/PrivateRoute";
import AdminLogin from "./AdminLogin/AdminLogin";
import AdminPicPage from "./AdminPicPage/AdminPicPage";
import {Redirect} from "react-router";


export const AdminRouter: React.FC = () => {
    return (
        <Switch>
            <Redirect from='/admin/' exact to='/admin/main'/>
            <PrivateRoute path="/admin/main" component={AdminPanel} />
            <PrivateRoute path="/admin/photo/:id" component={AdminPicPage} />
            <PrivateRoute path="/admin/hashtag" component={AdminHashTags} />
            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/admin/logout" component={AdminLogout} />
        </Switch>
    );
};


