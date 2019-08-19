import React from "react";
import {getAdminHashtags} from "../../../store/selectors";
import {useSelector} from "react-redux";


const AdminHashTagsAddStatus: React.FC = () => {

    const {addError} = useSelector(getAdminHashtags);

    return (
        addError ? <div className="field-input error-block">{addError}</div> : null
    )
};


export default AdminHashTagsAddStatus;