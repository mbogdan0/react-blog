import {Picture} from "../../../interfaces/picture";
import React from "react";
import dayjs from 'dayjs';

import "./AdminPicPage.scss";

interface PicPageFormProps {
    data: Picture;
}

const AdminPicPageDetails: React.FC<PicPageFormProps> = ({data}) => {

    return (
        <div className="photo-details">
            Фото добавлено {dayjs(data.date).format('HH:mm, DD MMM YYYY')} <br />
            Размер фото: {(data.size/1000/1000).toFixed(2)} MB
        </div>);
};

export default AdminPicPageDetails;