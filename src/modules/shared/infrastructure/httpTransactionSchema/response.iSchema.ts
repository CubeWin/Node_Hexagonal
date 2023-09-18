import type { UserEntity } from '../../../user/domain/user.entity';

/** Domain Entities */
// export interface entityDomain {
//     entity: UserEntity | null;
// }

type entityDomain = UserEntity | null;

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
interface paginationoData {
    current_page: number;
    next_page: number | null;
    previous_page: number | null;
    total_pages: number;
    total_entries: number;
}

interface collectionData {
    request: entityDomain[] | null;
    pagination: paginationoData;
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
export interface failDataSchema extends plainResponseSchema {
    error_code: number;
    data: entityDomain[] | null;
}
