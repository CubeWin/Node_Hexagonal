import { hashPassword } from '../../shared/infrastructure/dependencies';
import { UserUseCAse } from '../application/user.useCase';
import { InMemoryUserRepository } from './repository/user.inMemory.repository';
import { UserController } from './user.controller';

const userRepository = new InMemoryUserRepository();
const userUseCase = new UserUseCAse(userRepository, hashPassword);
export const userController = new UserController(userUseCase);
