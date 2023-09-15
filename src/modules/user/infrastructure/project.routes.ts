import express, { type RequestHandler } from 'express';
import { userController } from './dependencies';
import { schemaValidation } from '../../shared/infrastructure/dependencies';
// import { schemaValidation } from './user.middleware';
import { createUserSchema } from './httpTransactionSchema/project.request';

const userRouter = express.Router();

userRouter.get('/', userController.getUsers.bind(userController) as RequestHandler);

userRouter.post(
    '/create/',
    schemaValidation(createUserSchema),
    userController.createUser.bind(userController) as RequestHandler,
);

userRouter.post('/login/', userController.loginController.bind(userController) as RequestHandler);

export { userRouter };
