import {Picture} from "../../../interfaces/picture";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteOnePhoto} from "../../../store/photos/actions";
import {getAdmonPhotoDeleting} from "../../../store/selectors";
import LoadingText from "../../shared/LoadingText";

interface PicPageFormProps {
    data: Picture;
}

const AdminPicPageDelete: React.FC<PicPageFormProps> = ({data}) => {
    const dispatch = useDispatch();
    const status = useSelector(getAdmonPhotoDeleting);
    const handleDelete = () => {
        if (!window.confirm('Удалить фото?')) {
            return false;
        }
        dispatch(deleteOnePhoto(data._id));
    };

    return (
        <>
            <input
                type="button"
                className="form-input delete-btn"
                onClick={handleDelete}
                value="удалить" />
            <LoadingText status={status}/>
        </>
    );

};

export default AdminPicPageDelete;