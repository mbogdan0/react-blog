import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import AdminUploadPicCategory from "./AdminUploadPicCategory";
import {UploadPicture} from "../../../interfaces/uploadPicture";
import {uploadPhoto} from "../../../store/photos/actions";
import {getPhotosState} from "../../../store/selectors";
import LoadingText from "../../shared/LoadingText";
import AdminUploadPicTags from "./AdminUploadPicTags";


const AdminUploadPicForm: React.FC = () => {
    const [form, setForm] = useState({
        file: null,
        category: null,
        hashtags: []
    } as UploadPicture);

    const [bigSizeError, setBigSizeError] = useState('');
    const [notJpegError, setNotJpegError] = useState('');

    const dispatch = useDispatch();
    let fileInput: HTMLInputElement | null;
    const {addPhotosAdmin} = useSelector(getPhotosState);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!(form.file && form.category)) {
            return alert('Выберите файл и категорию');
        }
        const formData: any = new FormData();
              formData.append('file', form.file as File);
              formData.append('category', form.category as string);
              formData.append('hashtags', JSON.stringify(form.hashtags));
        (fileInput as any).value = null;
        setForm((state) => ({...state, file: null, hashtags: []}));
        dispatch(uploadPhoto(formData));
    };



    const handleChangeFile = (e: any) => {
        const file: File = (e.target.files || [])[0];
        const sizeInMb = file.size / 1000 / 1000;

        setBigSizeError((sizeInMb > 2.5) ? ('Файл, возможно, слишком большой. Вы выбрали файл размером ' + sizeInMb.toFixed(2) + ' MB') : '');
        setNotJpegError((file.type !== 'image/jpeg') ? 'Вы выбрали не JPEG картинку': '');

        setForm({...form, file: file});
    };


    const errors = [notJpegError, bigSizeError].map((item: any, index) => <div className="error" key={index}>{item}</div>);

    return (
        <form onSubmit={handleSubmit} className="form-upload-pic">
            <LoadingText status={addPhotosAdmin}/>
            <AdminUploadPicCategory
                onCategoryChange={(cat: string) => setForm({...form, category: cat})}
            />

            <AdminUploadPicTags
                onTagsChange={(tags: string[]) => setForm({...form, hashtags: tags})}
                preSelected={form.hashtags}
                />

            <div className="field-input">
                <div className="label-field">
                    Выберите файл
                </div>
                <input
                    className="form-input"
                    type="file"
                    ref={ref => fileInput = ref}
                    onChange={handleChangeFile}
                />
            </div>
            <div className="field-input">
                <div className="label-field"></div>
                <input
                    className="form-input"
                    type="submit"
                    disabled={!!(notJpegError.length)}
                    value="Загрузить фотку"
                />
            </div>
            {errors}
        </form>
    );
};

export default AdminUploadPicForm;
