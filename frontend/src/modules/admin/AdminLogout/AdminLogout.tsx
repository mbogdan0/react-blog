import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from "react-router";
import {makeLogout} from "../../../store/admin/actions";

const AdminLogout: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(makeLogout());
    });

    return (
        <Redirect to="/" />
    );
};


export default AdminLogout;