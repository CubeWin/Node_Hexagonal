import type { HashPassword } from '../../shared/domain/shared.hashPassword';
import type { UserEntity, typeCategory } from '../domain/user.entity';
import type { UserRepository } from '../domain/user.repository';
import { UserValue } from '../domain/user.value';

export class UserUseCAse {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly hashPassword: HashPassword,
    ) {}

    public logInUser = async ({
        username,
        password,
    }: {
        username: string;
        password: string;
    }): Promise<UserEntity | null> => {
        const getUser = await this.userRepository.findByUserOrEmail(username);
        if (!getUser) {
            throw new Error('No se encontro elusuario');
        }
        const getHashPassword = getUser.password;
        const isCorrect = await this.hashPassword.verifyEncryptText(password, getHashPassword);
        if (!isCorrect) {
            return null;
        }
        return getUser;
    };

    public createUser = async ({
        email,
        username,
        password,
        category,
    }: {
        email: string;
        username: string;
        password: string;
        category: typeCategory;
    }): Promise<UserEntity | null> => {
        const passwordHash = await this.hashPassword.encryptText(password);
        const userValue = new UserValue({
            email,
            username,
            password: passwordHash,
            category,
        });
        const userCreate = await this.userRepository.createUser(userValue);
        return userCreate;
    };

    public getListUser = async (): Promise<UserEntity[] | null> => {
        const usersLists = await this.userRepository.getAllUser();
        return usersLists;
    };
}
