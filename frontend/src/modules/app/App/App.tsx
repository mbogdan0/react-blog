import React from 'react';
import AppMenu from "../AppMenu/AppMenu";
import AppMain from "../AppMain/AppMain";
import './App.scss';

const App: React.FC = () => {

    return (
        <div className="App">
            <AppMenu />
            <AppMain />
        </div>
    );
};

export default App;
