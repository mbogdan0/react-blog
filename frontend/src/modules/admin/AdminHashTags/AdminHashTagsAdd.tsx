import React, {useState} from 'react';
import {addHashTag} from "../../../store/admin/actions";
import AdminHashTagsAddStatus from "./AdminHashTagsAddStatus";
import {useDispatch, useSelector} from "react-redux";

import './AdminHashTags.scss';
import {getAdminHashtags} from "../../../store/selectors";

const AdminHashTagsAdd: React.FC = () => {

    const [form, setForm] = useState({tag: ''});
    const dispatch = useDispatch();

    const {addLoading} = useSelector(getAdminHashtags);

    const handleChange = (name: string, value: string) => {
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addHashTag(form));
        handleChange('tag', '');
    };

    return (
        <form onSubmit={handleSubmit} className="admin-hashtags-add">
            <AdminHashTagsAddStatus />
            <div className="field-input">
                <input
                    className="form-input"
                    type="text"
                    placeholder="введите хэштег..."
                    value={form.tag}
                    onChange={e => handleChange('tag', e.target.value)}
                />
            </div>
            <div className="field-input">
                <input
                    className="form-input"
                    type="submit"
                    disabled={addLoading}
                    value={addLoading ? 'загрузка...' : 'Добавить'}
                />
            </div>
        </form>
    );
};


export default AdminHashTagsAdd;