export enum typeCategory {
    'USER_ADMINISTRATOR',
    'USER_STANDAR',
    'USER_LECTOR',
}

export interface UserEntity {
    id_user: string;
    email: string;
    password: string;
    username: string;
    category: typeCategory;
}
