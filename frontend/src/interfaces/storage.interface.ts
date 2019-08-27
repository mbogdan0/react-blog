
export type LoadingStatus = null | true | string;
// null - not loading
// true - loading
// string - error


export interface ErrorMessage {
    error: string | null;
}

export interface GetById {
    id: string;
}
