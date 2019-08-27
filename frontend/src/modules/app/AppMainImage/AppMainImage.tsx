import React from "react";
import {PictureLight} from "../../../interfaces/picture";

interface ImageProps {
    data: PictureLight;
}

const AppMainImage: React.FC<ImageProps> = ({data}) => {
    const imgUrl = process.env.REACT_APP_API_URL;

    return (
      <img src={imgUrl + data.path} />
    );

};

export default AppMainImage;
