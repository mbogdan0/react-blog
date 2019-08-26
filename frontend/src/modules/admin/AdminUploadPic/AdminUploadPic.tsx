import React from "react";
import AdminUploadPicForm from "./AdminUploadPicForm";
import AdminPicList from "../AdminPicList/AdminPicList";

import "./AdminUploadPic.scss";

const AdminUploadPic: React.FC = () => {


    return (
        <>
            <AdminUploadPicForm />
            <AdminPicList />
        </>
    );

};

export default AdminUploadPic;