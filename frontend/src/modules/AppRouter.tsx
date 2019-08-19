import React, {lazy} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WaitingComponent from "../utils/components/WaitingComponent";

const App = lazy(() => import("./app/App/App"));
const Admin = lazy(() => import("./admin/Admin/Admin"));

export const AppRouter: React.FC = () => {

    return (
        <Router>
            <Route path="/" exact component={WaitingComponent(App)} />
            <Route path="/admin" component={WaitingComponent(Admin)} />
        </Router>
    );
};





