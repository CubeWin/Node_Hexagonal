interface plainResponseSchema {
    success: boolean;
    message: string;
}

/** Login Response */
interface loginData {
    user: object;
    role: string;
    token: string;
}

export interface loginResponseSchema extends plainResponseSchema {
    data: loginData;
}

/** Collection Response */
interface paginationoData {
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    total_pages: number;
    total_entries: number;
}

interface collectionData {
    request: object[];
    pagination: paginationoData;
}

export interface getCollectionSchema extends plainResponseSchema {
    data: collectionData;
}

/** POST Response */
interface postData {
    request: object;
}

export interface postDataSchema extends plainResponseSchema {
    data: postData;
}

/** PUT Response */
interface putData {
    category: object;
}

export interface putDataSchema extends plainResponseSchema {
    data: putData;
}

/** DELETE Response */
export interface deleteDataSchema extends plainResponseSchema {
    data: object | null;
}

/** FAIL Response */
export interface failDataSchema extends plainResponseSchema {
    error_code: number;
    data: object | null;
}
