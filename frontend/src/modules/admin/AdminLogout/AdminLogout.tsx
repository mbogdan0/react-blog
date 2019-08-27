import React from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from "react-router";
import {makeLogout} from "../../../store/admin/actions";
import {useDispatchEffect} from "../../../hooks/useDispatchEffect";

const AdminLogout: React.FC = () => {

    useDispatchEffect(makeLogout(), useDispatch());

    return (
        <Redirect to="/" />
    );
};

export default AdminLogout;
