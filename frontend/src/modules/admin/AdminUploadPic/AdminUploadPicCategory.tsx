import React, {useEffect, useState} from "react";

import "./AdminUploadPic.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../../store/admin/actions";
import {getAdminCategories} from "../../../store/selectors";



interface CategoryProps {
    onCategoryChange: (cat: string) => void;
    preSelected?: string; // a default value (from server)
}

const AdminUploadPicCategory: React.FC<CategoryProps> = ( {onCategoryChange, preSelected} ) => {
    const categories = useSelector(getAdminCategories);
    const [selected, setSelected] = useState('0');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        if (preSelected) {
            setSelected(preSelected);
        }
    }, [preSelected]);

    const handleChange = (val: string) => {
        setSelected(val);
        onCategoryChange(val);
    };

    return (
        <div className="field-input">
            <select className="form-input"
                    value={selected}
                    onChange={e => handleChange(e.target.value)}>
                {categories.map(item => <option key={item._id} value={item._id}>{item.name}</option>)}
            </select>
        </div>
    );
};

export default AdminUploadPicCategory;