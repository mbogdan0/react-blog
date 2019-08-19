import {getLSUser} from "./keep-token";

export const $post = (url: string, data: Object): Promise<any> => {
    const user = getLSUser();
    const auth = user && user.token ? `Bearer ${user.token}` : '';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
};


export const $postFile = (url: string, data: FormData): Promise<any> => {
    const user = getLSUser();
    const auth = user && user.token ? `Bearer ${user.token}` : '';

    return fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': auth
        },
        body: data
    }).then(res => res.json());

};

export const $get = (url: string): Promise<any> => {
    const user = getLSUser();
    const auth = user && user.token ? `Bearer ${user.token}` : '';

    return fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());

};

export const $delete = (url: string): Promise<any> => {
    const user = getLSUser();
    const auth = user && user.token ? `Bearer ${user.token}` : '';
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Authorization': auth,
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
};