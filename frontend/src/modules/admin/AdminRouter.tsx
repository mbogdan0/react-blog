import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminPanel from "./AdminPanel/AdminPanel";
import AdminHashTags from "./AdminHashTags/AdminHashTags";
import AdminLogout from "./AdminLogout/AdminLogout";
import PrivateRoute from "../../utils/components/PrivateRoute";
import AdminLogin from "./AdminLogin/AdminLogin";


export const AdminRouter: React.FC = () => {
    return (
        <Switch>
            <PrivateRoute path="/admin/main" component={AdminPanel} />
            <PrivateRoute path="/admin/hashtag" component={AdminHashTags} />

            <Route path="/admin/login" component={AdminLogin} />
            <Route path="/admin/logout" component={AdminLogout} />
        </Switch>
    );
};


