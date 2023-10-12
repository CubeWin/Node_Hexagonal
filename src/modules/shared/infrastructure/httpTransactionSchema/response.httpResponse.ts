import type { Response } from 'express';
import type {
    deleteDataSchema,
    getCollectionSchema,
    postDataSchema,
    putDataSchema,
} from './response.schemaIData';
import { ERROR_HTTP, ERROR_MAIN } from './response.message';
import { HttpResponseSchemaData } from './response.schemaData';

export enum HttpStatus {
    OK = 200,
    CREATED = 201,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {
    Success(
        res: Response,
        httpStatus: HttpStatus,
        data: postDataSchema | getCollectionSchema | putDataSchema | deleteDataSchema,
    ): Response {
        return res.status(httpStatus).json(data);
    }

    NotFound(res: Response): Response {
        const { errorCode, message } = ERROR_HTTP[1105];
        const httpDataResponse = new HttpResponseSchemaData();
        const dataResponse = httpDataResponse.Error(message, errorCode);
        return res.status(HttpStatus.NOT_FOUND).json(dataResponse);
    }

    Unauthorized(res: Response): Response {
        const { errorCode, message } = ERROR_HTTP[1101];
        const httpDataResponse = new HttpResponseSchemaData();
        const dataResponse = httpDataResponse.Error(message, errorCode);
        return res.status(HttpStatus.UNAUTHORIZED).json(dataResponse);
    }

    Forbidden(res: Response): Response {
        const { errorCode, message } = ERROR_HTTP[1102];
        const httpDataResponse = new HttpResponseSchemaData();
        const dataResponse = httpDataResponse.Error(message, errorCode);
        return res.status(HttpStatus.FORBIDDEN).json(dataResponse);
    }

    Error(res: Response): Response {
        const { errorCode, message } = ERROR_MAIN[1000];
        const httpDataResponse = new HttpResponseSchemaData();
        const dataResponse = httpDataResponse.Error(message, errorCode);
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(dataResponse);
    }
}
