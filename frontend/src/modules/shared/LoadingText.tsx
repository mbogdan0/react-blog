import React from "react";
import {LoadingStatus} from "../../interfaces/storage.interface";


interface LoadingTextProps {
    status?: LoadingStatus
}

const LoadingText: React.FC<LoadingTextProps> = ({status}) => {

    const error = (typeof status === 'string') && <div className="loading-text-error">{status}</div>;
    const loading = (status === true) && <div className="loading-text-loading">загрузка...</div>;

    return (
        <>{error}{loading}</>
    );
};

export default LoadingText;