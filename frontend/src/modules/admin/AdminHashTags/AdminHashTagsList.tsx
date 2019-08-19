import React, {useEffect} from "react";
import {getAdminHashtags} from "../../../store/selectors";
import {useDispatch, useSelector} from "react-redux";
import {loadHashtags} from "../../../store/admin/actions";
import AdminHashTahItem from "./AdminHashTagItem";

const AdminHashTagsList: React.FC = () => {

    const {data, deleteError} = useSelector(getAdminHashtags);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadHashtags());
    }, []);

    const list = data.map(item => <AdminHashTahItem data={item} key={item._id} />)

    return (
        <>
            {deleteError ? <div className="error-delete">Ошибка удаления: {deleteError}</div> : null}
            <div>{list.length ? list : 'Еще не добавлено ни одного тэга'}</div>
        </>
    )
};


export default AdminHashTagsList;