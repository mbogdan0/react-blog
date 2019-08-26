import React from "react";
import {Hashtag} from "../../../interfaces/hashtag";
import dayjs from 'dayjs';
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteHashtag} from "../../../store/hashtags/actions";


const AdminHashTagItem = ({data}: {data: Hashtag}) => {
    const dispatch = useDispatch();
    const onDelete = (id: any) => {
        dispatch(deleteHashtag(id));
    };

    return (
        <div className="admin-hashtag-item">

            <div>
                <NavLink to={`/admin/hashtag/${data._id}`}>
                    {data.tag}
                </NavLink>
            </div>

            <div className="entries">
                записей: {data.photos}
            </div>
            <div className="date-add">
                (добавлено {dayjs(data.date).format('HH:mm, DD MMM YYYY')})
            </div>

            <div className="ok">
                <span
                    onClick={() => onDelete(data._id)}
                    className="link danger smaller"
                >удалить</span>
            </div>

        </div>
    )
};

export default AdminHashTagItem;