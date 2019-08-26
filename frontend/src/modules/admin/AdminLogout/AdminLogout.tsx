import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from "react-router";
import {AdminActionType} from "../../../store/admin/types";

const AdminLogout: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: AdminActionType.MAKE_LOGOUT });
    }, []);

    return (
        <Redirect to="/" />
    );
};

export default AdminLogout;
