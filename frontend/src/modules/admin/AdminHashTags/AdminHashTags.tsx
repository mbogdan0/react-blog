import React from 'react';
import AdminHashTagsAdd from "./AdminHashTagsAdd";
import AdminHashTagsList from "./AdminHashTagsList";

const AdminHashTags: React.FC = () => {

    return (
        <div>
            <AdminHashTagsAdd />
            <br />
            <AdminHashTagsList />
        </div>
    );
};


export default AdminHashTags;