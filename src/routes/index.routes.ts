import { type Request, type Response, Router } from 'express';
import { userRouter } from '../modules/user/infrastructure/project.routes';

const router = Router();

router.use('[/]', (req: Request, res: Response) => {
    res.status(201).json({ message: 'MAIN PAGE' });
});

router.use('/second', (req: Request, res: Response) => {
    res.status(201).json({ message: 'Page SECOND' });
});

router.use('/tri', (req: Request, res: Response) => {
    res.status(201).json({ message: 'Page TRI' });
});

router.use('/user', userRouter);

export { router };
