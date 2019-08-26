import React, {useEffect, useState} from "react";
import './AdminPicPage.scss';
import {Picture} from "../../../interfaces/picture";
import AdminUploadPicCategory from "../AdminUploadPic/AdminUploadPicCategory";
import AdminUploadPicTags from "../AdminUploadPic/AdminUploadPicTags";
import {Hashtag} from "../../../interfaces/hashtag";
import AdminPicPageDetails from "./AdminPicPageDetails";
import {UpdatePicture} from "../../../interfaces/updatePicture";
import {useDispatch, useSelector} from "react-redux";
import {updateOnePhoto} from "../../../store/photos/actions";
import {getAdminPhotoUpdateDetail} from "../../../store/selectors";
import LoadingText from "../../shared/LoadingText";
import AdminPicPageDelete from "./AdminPicPageDelete";



interface PicPageFormProps {
    data: Picture;
}

const AdminPicPageForm: React.FC<PicPageFormProps> = ({data}) => {
    const [form, setForm] = useState({_id: null, category: undefined, tags: []} as UpdatePicture);
    const status = useSelector(getAdminPhotoUpdateDetail);
    const dispatch = useDispatch();
    useEffect(() => {
        const tags = data.tags.map((item: Hashtag) => item._id);
        const category = data.category ? data.category._id : undefined;
        setForm((prevState: UpdatePicture) => ({
            ...prevState,
            _id: data._id,
            category,
            tags
        } as UpdatePicture));
    }, [data]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(updateOnePhoto(form));
    };



    return (
        <form onSubmit={handleSubmit} className="form-upload-pic">
            <AdminPicPageDetails data={data} />

            <LoadingText status={status}/>
            <AdminUploadPicCategory
                onCategoryChange={(category: string) => setForm((prevState: UpdatePicture) => ({...prevState, category}))}
                preSelected={form.category}
            />

            <AdminUploadPicTags
                onTagsChange={(tags: string[]) => setForm((prevState: UpdatePicture) => ({...prevState, tags}))}
                preSelected={form.tags}
            />

            <div className="field-input">
                <div className="label-field">&nbsp;</div>
                <input
                    className="form-input"
                    type="submit"
                    value="Обновить"
                />

                <AdminPicPageDelete data={data} />
            </div>
        </form>
    )
};

export default AdminPicPageForm;