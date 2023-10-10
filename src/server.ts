import express, { type Request, type Application, type Response, type NextFunction } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan'; // *Solo para desarrollo
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './routes/index.routes';
import { handleError } from './common/handleError.common';
dotenv.config();

export class Server {
    app: Application;
    port: string | number;

    constructor() {
        this.app = express();
        this.port = process.env.PORT ?? 9090;

        this.middlewares();
        this.routes();
    }

    middlewares(): void {
        this.app.use(morgan('conbinend')); // *Solo para desarrollo
        this.app.use(cors());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json());
        this.app.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'Content-Type, X-Requested-With, Accept, Authorization, Origin',
            );
            if (req.method === 'OPTIONS') {
                res.header('Access-Control-Allow-Methods', 'PUT, POST, PATH, DELETE, GET');
                return res.status(200).json({});
            }
            next();
        });
    }

    routes(): void {
        this.app.use('/api', router);
        this.app.use(handleError);
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Servidor en el puerto ${this.port}. \n http://localhost:${this.port}`);
        });
    }
}
