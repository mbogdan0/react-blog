import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCatalog, getRouter} from "../../../store/selectors";
import {loadMainPagePhotos} from "../../../store/catalog/actions";
import {PictureLight} from "../../../interfaces/picture";
import AppMainImage from "../AppMainImage/AppMainImage";


const AppMain: React.FC = () => {

    const {location: {pathname}} = useSelector(getRouter);
    const dispatch = useDispatch();
    const {loadingMainPage, photosOnMainPage} = useSelector(getCatalog);
    useEffect(() => {
        dispatch(loadMainPagePhotos(pathname));
    }, [pathname, dispatch]);



    const photos = photosOnMainPage.map((item: PictureLight) => <AppMainImage data={item} key={item.short_id} />);

    return (
        <div>s</div>
    );
};

export default AppMain;
