import React, {useState} from "react";
import {uploadPhoto} from "../../../store/admin/actions";
import {useDispatch} from "react-redux";
import AdminUploadPicCategory from "./AdminUploadPicCategory";
import {UploadPicture} from "../../../interfaces/uploadPicture";




const AdminUploadPicForm: React.FC = () => {

    const [form, setForm] = useState({file: null, category: null} as UploadPicture);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
              formData.append('file', form.file as File);
              formData.append('category', form.category as string);

        dispatch(uploadPhoto(formData));
    };



    return (
        <form onSubmit={handleSubmit}>

            <AdminUploadPicCategory
                onCategoryChange={(cat: string) => setForm({...form, category: cat})}
            />

            {JSON.stringify(form)}
            <div className="field-input">
                <input
                    className="form-input"
                    type="file"
                    onChange={e => setForm({...form, file: (e.target.files || [])[0]})}
                />
            </div>
            <div className="field-input">
                <input
                    className="form-input"
                    type="submit"
                    value="Загрузить фотку"
                />
            </div>
        </form>
    );

};

export default AdminUploadPicForm;