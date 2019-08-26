import React, {useEffect, useState} from "react";
import "./AdminUploadPic.scss";
import {useDispatch, useSelector} from "react-redux";
import {getHashtagsState} from "../../../store/selectors";
import {loadHashtags} from "../../../store/hashtags/actions";
import AdminHashTagItemForm from "../AdminHashTags/AdminHashTagItemForm";
import {Hashtag} from "../../../interfaces/hashtag";


interface CategoryProps {
    onTagsChange: (tags: string[]) => void;
    preSelected: string[]; // a default value (from server)
}


const AdminUploadPicTags: React.FC<CategoryProps> = ( {onTagsChange, preSelected} ) => {
    const dispatch = useDispatch();
    const {load: {data}} = useSelector(getHashtagsState);

    useEffect(() => {
        dispatch(loadHashtags());
    }, []);

    const handleChangeChild = (id: string, val: boolean) => {
        const selectedTags = [...preSelected];
        if (val) { // toggle to Selected
            if (!selectedTags.includes(id)) { // if not in array of selected tags,
                selectedTags.push(id);
            }
        } else { // toggle to Not selected
            if (selectedTags.includes(id)) {
                selectedTags.splice( selectedTags.indexOf(id), 1 );
            }
        }
        onTagsChange(selectedTags);
    };

    const tags = data.map((item: Hashtag) => <AdminHashTagItemForm
        key={item._id}
        onValChange={handleChangeChild}
        selected={preSelected && preSelected.includes(item._id)}
        data={item} />);

    return (
        <div className="field-input">
            <div className="label-field">
                Тэги
            </div>
            <div className="hash-tags-list-form">
                {tags}
            </div>
        </div>
    );
};

export default AdminUploadPicTags;