import type { Request, Response } from 'express';
import type { UserUseCAse } from '../application/user.useCase';
import type { typeCategory } from '../domain/user.entity';

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
        const users = await this.userUseCase.getListUser();
        res.status(201).json({ success: true, data: users });
    }
}
