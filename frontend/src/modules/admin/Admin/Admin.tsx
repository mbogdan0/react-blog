import React from 'react';
import {AdminRouter} from "../AdminRouter";
import AdminMenu from "../AdminMenu/AdminMenu";

import './Admin.scss';


const Admin: React.FC = () => {
    return (
        <div className="admin-body">
            <div className="admin-left-block">
                <AdminMenu />
            </div>
            <div className="admin-main-block">
                <AdminRouter />
            </div>
        </div>
    );
};


export default Admin;