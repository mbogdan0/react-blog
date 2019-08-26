import React from "react";

import './AppMenu.scss';
import AppLogo from "../AppLogo/AppLogo";
import {NavLink} from "react-router-dom";

const AppMenu: React.FC = () => {
    return (
        <div className="app-menu">
            <AppLogo />
            <div className="div-menu">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active">портреты</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fashion" exact activeClassName="active">фешн</NavLink>
                    </li>
                    <li>
                        <NavLink to="/advs" exact activeClassName="active">реклама</NavLink>
                    </li>
                    <li>
                        <NavLink to="/travel" exact activeClassName="active">тревел</NavLink>
                    </li>
                    <li>
                        <NavLink to="/wedding" exact activeClassName="active">свадьба</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" exact activeClassName="active">контакты</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    );
};

export default AppMenu;
