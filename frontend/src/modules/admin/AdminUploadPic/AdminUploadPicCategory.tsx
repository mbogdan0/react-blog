import React, {useEffect, useState} from "react";
import "./AdminUploadPic.scss";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesState} from "../../../store/selectors";
import {Category} from "../../../interfaces/category";
import {getCategories} from "../../../store/categories/actions";


interface CategoryProps {
    onCategoryChange: (cat: string) => void;
    preSelected?: string | Category; // a default value (from server)
}

const AdminUploadPicCategory: React.FC<CategoryProps> = ( {onCategoryChange, preSelected} ) => {
    const {data} = useSelector(getCategoriesState);
    const [selected, setSelected] = useState('0');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategories());
        if (preSelected) {
            if (typeof preSelected === 'string') {
                setSelected(preSelected);
            } else {
                setSelected(preSelected._id);
            }
        }
    }, [preSelected]);

    const handleChange = (val: string) => {
        setSelected(val);
        onCategoryChange(val);
    };

    return (
        <div className="field-input">
            <div className="label-field">
                Категория
            </div>
            <select className="form-input"
                    value={selected}
                    onChange={e => handleChange(e.target.value)}>
                {data.map((item: Category) => <option key={item._id} value={item._id}>{item.name}</option>)}
            </select>
        </div>
    );
};

export default AdminUploadPicCategory;