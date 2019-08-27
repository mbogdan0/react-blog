import React, {useEffect} from "react";
import {RouteComponentProps, withRouter} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getAdminPhotoDetailPage} from "../../../store/selectors";
import {loadDetailPage} from "../../../store/photos/actions";
import LoadingText from "../../shared/LoadingText";

import './AdminPicPage.scss';
import AdminPicPageForm from "./AdminPicPageForm";

interface MatchRouter {
    id: string;
}

const AdminPicPage: React.FC<RouteComponentProps<MatchRouter>> = ({match}) => {
    const imgUrl = process.env.REACT_APP_API_URL;
    const {id} = match.params;
    const {data, status} = useSelector(getAdminPhotoDetailPage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadDetailPage(id));
    }, [id, dispatch]);

    return (
        <>
            <LoadingText status={status}/>
            {data && <div className="body-page-photo">

                <AdminPicPageForm data={data} />

                <div className="photo">
                    <img src={imgUrl + data.path} alt="" />
                </div>
            </div>}
        </>
    )
};

export default withRouter(AdminPicPage);