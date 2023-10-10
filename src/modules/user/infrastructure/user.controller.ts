import type { NextFunction, Request, Response } from 'express';
import type { UserUseCAse } from '../application/user.useCase';
import type { UserEntity, typeCategory } from '../domain/user.entity';
import type { paginationData } from '../../shared/infrastructure/httpTransactionSchema/response.schemaIData';
import { HttpStatus } from '../../shared/infrastructure/httpTransactionSchema/response.httpResponse';
import { HttpResponseSchemaData } from '../../shared/infrastructure/httpTransactionSchema/response.schemaData';
import { NotFoundResponse } from '../../shared/infrastructure/httpTransactionSchema/response.typeResponse';

export class UserController {
    constructor(private readonly userUseCase: UserUseCAse) {}

    public async loginController(req: Request, res: Response): Promise<void> {
        const { username, password }: { username: string; password: string } = req.body;
        const isLog = await this.userUseCase.logInUser({ username, password });
        if (!isLog) {
            res.status(400).json({ success: false });
        }
        res.status(201).json({ success: true });
    }

    public async createUser(req: Request, res: Response): Promise<void> {
        const {
            email,
            username,
            password,
            category,
        }: { email: string; username: string; password: string; category: typeCategory } = req.body;
        const newUser = await this.userUseCase.createUser({ email, username, password, category });
        if (!newUser) {
            res.status(400).json({ success: false });
        }
        res.status(201).json({ success: true, data: newUser });
    }

    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users: UserEntity[] | null = await this.userUseCase.getListUser();
            if (!users || users.length === 0 || users === null) {
                throw new NotFoundResponse();
            }
            // const httpResponse = new HttpResponse();
            const httpDataResponse = new HttpResponseSchemaData();
            const pagination: paginationData = {
                current_page: 2,
                next_page: 2,
                previous_page: 1,
                total_entries: 2,
                total_pages: 2,
            };
            // httpResponse.Success(res, 201, httpDataResponse.ReadAll(users, 'Users', pagination));
            res.status(HttpStatus.OK).json(httpDataResponse.ReadAll(users, 'Users', pagination));
        } catch (error) {
            next(error);
            // if (error instanceof NotFoundResponse) {
            //     const httpResponse = new HttpResponse();
            //     httpResponse.NotFound(res);
            // }
        }
    }
}
