import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadAllPhotos} from "../../../store/photos/actions";
import {getAdminPhotos} from "../../../store/selectors";
import LoadingText from "../../shared/LoadingText";
import {Picture} from "../../../interfaces/picture";
import AdminPicItem from "./AdminPicItem";
import './AdminPicList.scss';

const AdminPicList: React.FC = () => {
    const {data, status} = useSelector(getAdminPhotos);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadAllPhotos());
    }, []);

    const list = data && data.map((item: Picture) => <AdminPicItem key={item._id} data={item}/>);

    return (
        <>
            <LoadingText status={status} />
            {(status === null) && <>
                Загружено фоток: {data.length}
                <div className="admin-photos-list">
                    {list}
                </div>
            </>}
        </>
    )
};

export default AdminPicList;