import type { UserEntity } from './user.entity';

export interface UserRepository {
    findByUserOrEmail: (userOrEmail: string) => Promise<UserEntity | null>;
    createUser: (user: UserEntity) => Promise<UserEntity | null>;
    getAllUser: () => Promise<UserEntity[] | null>;
}
