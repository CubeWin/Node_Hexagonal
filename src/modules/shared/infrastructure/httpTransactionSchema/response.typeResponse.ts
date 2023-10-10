import { ERROR_HTTP, ERROR_MAIN } from './response.message';

export class NotFoundResponse extends Error {
    constructor() {
        const { message } = ERROR_HTTP[1105];
        super(message);
    }
}

export class UnauthorizedResponse extends Error {
    constructor() {
        const { message } = ERROR_HTTP[1101];
        super(message);
    }
}

export class ForbiddenResponse extends Error {
    constructor() {
        const { message } = ERROR_HTTP[1102];
        super(message);
    }
}

export class ErrorResponse extends Error {
    constructor() {
        const { message } = ERROR_MAIN[1000];
        super(message);
    }
}
