import React, {useEffect} from "react";
import {getAdminAuth, getAdminLoginForm} from "../../../store/selectors";
import {useSelector} from "react-redux";
import {withRouter} from "react-router";


const AdminLoginStatus: React.FC = ({history}: any) => {

    const {loginError} = useSelector(getAdminLoginForm);
    const adminAuthOk = useSelector(getAdminAuth);

    useEffect(() => {
        if (adminAuthOk) {
            history.push('/admin/main');
        }
    }, [adminAuthOk, history]);

    return (
        loginError ? <div className="field-input error-block">{loginError}</div> : null
    )
};


export default withRouter(AdminLoginStatus);