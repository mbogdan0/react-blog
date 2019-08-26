import React, {useEffect} from 'react';
import './App.scss';
import AppMenu from "../AppMenu/AppMenu";
import AppMain from "../AppMain/AppMain";
import {RouteComponentProps, withRouter} from "react-router";
import {LocationState} from "history";



const App: React.FC<RouteComponentProps> = ({location, history}) => {


    //console.log(location)

    useEffect(() => history.listen((location) => {
            console.log(location);
    }), [history, location]);

    return (
        <div className="App">
            <AppMenu />
            <AppMain />
        </div>
    );
};

export default withRouter(App);
