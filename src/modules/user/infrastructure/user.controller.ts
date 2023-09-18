import type { Request, Response } from 'express';
import type { UserUseCAse } from '../application/user.useCase';
import type { UserEntity, typeCategory } from '../domain/user.entity';
import type { getCollectionSchema } from '../../shared/infrastructure/httpTransactionSchema/response.iSchema';

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

    public async getUsers(req: Request, res: Response): Promise<void> {
        const users: UserEntity[] | null = await this.userUseCase.getListUser();
        const resUsers: getCollectionSchema = {
            message: '',
            success: true,
            data: {
                request: users,
                pagination: {
                    current_page: 1,
                    next_page: 2,
                    previous_page: 1,
                    total_entries: 2,
                    total_pages: 2,
                },
            },
        };
        res.status(201).json(resUsers);
    }
}
