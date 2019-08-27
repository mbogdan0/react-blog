import React from "react";
import {Picture} from "../../../interfaces/picture";
import {NavLink} from "react-router-dom";


interface AdminPicItemProps {
    data: Picture
}


const AdminPicItem: React.FC<AdminPicItemProps> = ({data}) => {
    const imgUrl = process.env.REACT_APP_API_URL;
    const categoryName = <div className="category-name">{data.category ? data.category.name : 'без категории'}</div>;

    return (
        <div className="item-picture">
            <NavLink to={'/admin/photo/' + data._id}>
                <img src={imgUrl + data.tinyPath} alt="" />
            </NavLink>
            {categoryName}
        </div>
    )
};

export default AdminPicItem;