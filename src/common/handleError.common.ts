import type { NextFunction, Request, Response } from 'express';
import { HttpResponse } from '../modules/shared/infrastructure/httpTransactionSchema/response.httpResponse';
import { NotFoundResponse } from '../modules/shared/infrastructure/httpTransactionSchema/response.typeResponse';

export const handleError = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction,
): void => {
    if (error instanceof NotFoundResponse) {
        const httpResponse = new HttpResponse();
        httpResponse.NotFound(res);
    }
};
