
export interface User {
    id: number;
    role: 'user' | 'admin';
    username: string;
    active: boolean;
    staff: string;
}
