import type { UserEntity } from '../../domain/user.entity';
import type { UserRepository } from '../../domain/user.repository';
import { USERS } from './userInMemory/user.inMemory.data';

export class InMemoryUserRepository implements UserRepository {
    async getAllUser(): Promise<UserEntity[] | null> {
        return USERS;
    }

    async createUser(user: UserEntity): Promise<UserEntity | null> {
        USERS.push(user);
        return user;
    }

    async findByUserOrEmail(userOrEmail: string): Promise<UserEntity | null> {
        const found = USERS.find(
            (user) => user.username === userOrEmail || user.email === userOrEmail,
        );
        if (!found) {
            return null;
        }
        return found;
    }
}
