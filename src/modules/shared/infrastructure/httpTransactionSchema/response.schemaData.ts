import type {
    deleteDataSchema,
    entityDomain,
    failDataSchema,
    getCollectionSchema,
    inputFailData,
    paginationData,
    postDataSchema,
    putDataSchema,
} from './response.schemaIData';

export class HttpResponseSchemaData {
    // CREATE STRUCTURES
    Create(dataInput: entityDomain, message: string): postDataSchema {
        return { success: true, message, data: { request: dataInput } };
    }

    // READ ALL STRUCTURES
    ReadAll(
        dataInput: entityDomain[] | null,
        message: string,
        pagination: paginationData,
    ): getCollectionSchema {
        return {
            success: true,
            message,
            data: {
                request: dataInput,
                pagination,
            },
        };
    }

    // READ ONE STRUCTURES\
    ReadOne(dataInput: entityDomain, message: string): postDataSchema {
        return { success: true, message, data: { request: dataInput } };
    }

    // UPDATE STRUCTURES
    Update(dataInput: entityDomain, message: string): putDataSchema {
        return { success: true, message, data: { category: dataInput } };
    }

    // DELETE STRUCTURES
    Delete(dataInput: entityDomain, message: string): deleteDataSchema {
        return { success: true, message, data: dataInput };
    }

    // ERROR STRUCTURES
    Error(message: string, errorCode: number, data: inputFailData[] | null = null): failDataSchema {
        return { success: false, message, error_code: errorCode, data };
    }
}
