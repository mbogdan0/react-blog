import React from "react";
import {Hashtag} from "../../../interfaces/hashtag";
import './AdminHashTagItemForm.scss';


interface ItemTagProps {
    onValChange: (id: string, val: boolean) => void;
    selected?: boolean | undefined;
    data: Hashtag;
}

const AdminHashTagItemForm: React.FC<ItemTagProps> = ({data, selected, onValChange}) => {

    const handleChange = (val: boolean) => {
      onValChange(data._id, val);
    };

    return (
        <span className="admin-hashtag-item-form">
            <label>
                <input
                    type="checkbox"
                    checked={!!selected}
                    onChange={e => handleChange(e.target.checked)}
                />
                {data.tag}
            </label>
        </span>
    )
};

export default AdminHashTagItemForm;