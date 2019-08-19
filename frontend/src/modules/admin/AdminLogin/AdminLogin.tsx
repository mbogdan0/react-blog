import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAdminLoginForm} from "../../../store/selectors";
import {makeLogin} from "../../../store/admin/actions";
import AdminLoginStatus from "./AdminLoginStatus";

import './AdminLogin.scss';


const AdminLogin: React.FC = () => {

    const [form, setForm] = useState({username: 'julia', password: 'PO09234lwEr'});

    const {isLoginLoading} = useSelector(getAdminLoginForm);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(makeLogin(form));
    };

    const handleChange = (name: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="admin-login">
            <AdminLoginStatus />
            <div className="field-input">
                <input
                    className="form-input"
                    type="text"
                    placeholder="Username"
                    defaultValue={form.username}
                    onChange={e => handleChange('username', e.target.value)}
                />
            </div>
            <div className="field-input">
                <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    defaultValue={form.password}
                    onChange={e => handleChange('password', e.target.value)}
                />
            </div>
            <div className="field-input">
                <input
                    className="form-input"
                    type="submit"
                    disabled={isLoginLoading}
                    value={isLoginLoading ? 'загрузка...' : 'Войти'}
                />
            </div>
        </form>
    );
};

export default AdminLogin;