/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type EditableFileType = {
    /**
     * The hash algorithm of the hash specified in the hash field
     */
    algorithm: string;
    /**
     * The hash of the file you're editing
     */
    hash: string;
    /**
     * The hash algorithm of the file you're editing
     */
    file_type: EditableFileType.file_type | null;
};

export namespace EditableFileType {

    /**
     * The hash algorithm of the file you're editing
     */
    export enum file_type {
        REQUIRED_RESOURCE_PACK = 'required-resource-pack',
        OPTIONAL_RESOURCE_PACK = 'optional-resource-pack',
    }


}
