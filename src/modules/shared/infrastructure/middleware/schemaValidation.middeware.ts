import type { NextFunction, Request, Response } from 'express';
import { type AnyZodObject, ZodError } from 'zod';
import { HttpResponseSchemaData } from '../httpTransactionSchema/response.schemaData';
import type { inputFailData } from '../httpTransactionSchema/response.schemaIData';
import { ERROR_MAIN } from '../httpTransactionSchema/response.message';
import { HttpStatus } from '../httpTransactionSchema/response.httpResponse';
export const schemaValidation =
    (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
        try {
            schema.parse({
                body: req.body,
                params: req.params,
                query: req.query,
            });
            next();
        } catch (error) {
            const httpDataResponse = new HttpResponseSchemaData();
            if (error instanceof ZodError) {
                const { errorCode, message } = ERROR_MAIN[1002];
                const dataFail: inputFailData[] = error.issues.map((issue) => ({
                    input: issue.path[1] as string,
                    message: issue.message,
                }));
                return res
                    .status(HttpStatus.BAD_REQUEST)
                    .json(httpDataResponse.Error(message, errorCode, dataFail));
            }
            const { errorCode, message } = ERROR_MAIN[1000];
            return res
                .status(HttpStatus.BAD_REQUEST)
                .json(httpDataResponse.Error(message, errorCode, null));
        }
    };
