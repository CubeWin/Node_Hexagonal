import { v4 as uuid } from 'uuid';
import type { UserEntity, typeCategory } from './user.entity';

export class UserValue implements UserEntity {
    id_user: string;
    email: string;
    username: string;
    password: string;
    category: typeCategory;

    constructor({
        email,
        username,
        password,
        category,
    }: {
        email: string;
        username: string;
        password: string;
        category: typeCategory;
    }) {
        this.id_user = uuid();
        this.email = email;
        this.username = username;
        this.password = password;
        this.category = category;
    }
}
