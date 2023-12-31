import type { UserEntity } from '../../../user/domain/user.entity';

export type entityDomain = UserEntity;

/** Parent Schema */
interface plainResponseSchema {
    success: boolean;
    message: string;
}

/** Login Response */
interface loginData {
    user: UserEntity;
    role: string;
    token: string;
}

export interface loginResponseSchema extends plainResponseSchema {
    data: loginData;
}

/** Collection Response */
export interface paginationData {
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    total_pages: number;
    total_entries: number;
}

interface collectionData {
    request: entityDomain[] | null;
    pagination: paginationData;
}

export interface getCollectionSchema extends plainResponseSchema {
    data: collectionData;
}

/** POST Response */
interface postData {
    request: entityDomain;
}

export interface postDataSchema extends plainResponseSchema {
    data: postData;
}

/** PUT Response */
interface putData {
    category: entityDomain;
}

export interface putDataSchema extends plainResponseSchema {
    data: putData;
}

/** DELETE Response */
export interface deleteDataSchema extends plainResponseSchema {
    data: entityDomain | null;
}

/** FAIL Response */
export interface inputFailData {
    input: string;
    message: string;
}

export interface failDataSchema extends plainResponseSchema {
    error_code: number;
    data: inputFailData[] | null;
}
