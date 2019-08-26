import {Picture} from "../../../interfaces/picture";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteOnePhoto, deleteOnePhotoRedirect} from "../../../store/photos/actions";
import {getAdmonPhotoDeleting} from "../../../store/selectors";
import LoadingText from "../../shared/LoadingText";
import {RouteComponentProps, withRouter} from "react-router";


interface PicPageFormProps {
    data: Picture;
}

const AdminPicPageDelete: React.FC<RouteComponentProps & PicPageFormProps> = ({history, data}) => {

    const dispatch = useDispatch();
    const status = useSelector(getAdmonPhotoDeleting);
    const handleDelete = () => {
        if (!window.confirm('Удалить фото?')) {
            return false;
        }
        dispatch(deleteOnePhoto(data._id));
    };

    useEffect(() => {
        if (status === 1) {
            history.push('/admin/main');
            dispatch(deleteOnePhotoRedirect());
        }
    }, [status]);

    return (<>
            <input
                type="button"
                className="form-input delete-btn"
                onClick={handleDelete}
                value="удалить" />
        <LoadingText status={status}/>
        </>
    );

};

export default withRouter(AdminPicPageDelete);