import React from 'react';
import {NavLink} from 'react-router-dom';
import {getAdminAuth} from "../../../store/selectors";
import {useSelector} from "react-redux";

import './AdminMenu.scss';

const AdminMenu: React.FC = () => {
    const adminAuthOk = useSelector(getAdminAuth);

    return (
        <ul className="admin-menu">
            <li>
                <NavLink to="/" exact activeClassName="active">главная сайта</NavLink>
            </li>
            <li>
                <NavLink to="/admin/main" exact activeClassName="active">главная админки</NavLink>
            </li>
            <li>
                <NavLink to="/admin/hashtag" exact activeClassName="active">хэштеги</NavLink>
            </li>
            <li className="secondary" hidden={!adminAuthOk}>
                <NavLink to="/admin/logout" exact activeClassName="active">разлогиниться</NavLink>
            </li>
        </ul>
    );
};


export default AdminMenu;
