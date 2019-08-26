import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getAdminLoginForm, getAdminUser} from "../../../store/selectors";
import {makeLoginAsync} from "../../../store/admin/actions";
import LoadingText from "../../shared/LoadingText";
import {RouteComponentProps, withRouter} from "react-router";
import './AdminLogin.scss';



const AdminLogin: React.FC<RouteComponentProps> = ({history}) => {

    const [form, setForm] = useState({username: 'julia', password: 'PO09234lwEr'});

    const status = useSelector(getAdminLoginForm);
    const user = useSelector(getAdminUser);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(makeLoginAsync(form));
    };

    useEffect(() => {
        if (user && user.token) {
            history.push('/admin/main');
        }
    }, [user, history]);

    const handleChange = (name: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // const redirect = user && !!user.token && <Redirect to="/admin/main" />;

    return (
        <form onSubmit={handleSubmit} className="admin-login">
            <LoadingText status={status} />
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
                    disabled={status === true}
                    value={status === true ? 'загрузка...' : 'Войти'}
                />
            </div>
        </form>
    );
};

export default withRouter(AdminLogin);