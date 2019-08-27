import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AdminHashTagItem from "./AdminHashTagItem";
import {Hashtag} from "../../../interfaces/hashtag";
import {getHashtagsState} from "../../../store/selectors";
import {loadHashtags} from "../../../store/hashtags/actions";
import LoadingText from "../../shared/LoadingText";


const AdminHashTagsList: React.FC = () => {
    const {load: {data, status}} = useSelector(getHashtagsState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadHashtags());
    }, [dispatch]);

    const list = data.map((item: Hashtag) => <AdminHashTagItem data={item} key={item._id} />);

    return (
        <>
            <LoadingText status={status}/>
            {(status === null) && <>
                {list.length ? list : 'Еще не добавлено ни одного тэга'}
            </>}
        </>
    )
};


export default AdminHashTagsList;
