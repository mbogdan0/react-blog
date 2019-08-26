import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getHashtagsState} from "../../../store/selectors";
import {addHashTag} from "../../../store/hashtags/actions";

import './AdminHashTags.scss';
import LoadingText from "../../shared/LoadingText";



const AdminHashTagsAdd: React.FC = () => {
    const [form, setForm] = useState({tag: ''});
    const dispatch = useDispatch();
    const {add} = useSelector(getHashtagsState);
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
            <LoadingText status={add} />
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
                    disabled={add === true}
                    value={add === true ? 'загрузка...' : 'Добавить'}
                />
            </div>
        </form>
    );
};


export default AdminHashTagsAdd;