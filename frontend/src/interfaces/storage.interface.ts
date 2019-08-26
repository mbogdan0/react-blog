
export type LoadingStatus = null | true | string | 1;
// null - not loading
// true - loading
// string - error
// 1 - done & action


export interface ErrorMessage {
    error: string | null;
}

export interface GetById {
    id: string;
}
