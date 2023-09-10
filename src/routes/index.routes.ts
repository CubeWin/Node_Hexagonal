import { type Request, type Response, Router } from 'express';

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

export { router };
