/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VersionFileHashes } from './VersionFileHashes';

export type VersionFile = {
    hashes: VersionFileHashes;
    /**
     * A direct link to the file
     */
    url: string;
    /**
     * The name of the file
     */
    filename: string;
    /**
     * Whether this file is the primary one for its version. Only a maximum of one file per version will have this set to true. If there are not any primary files, it can be inferred that the first file is the primary one.
     */
    primary: boolean;
    /**
     * The size of the file in bytes
     */
    size: number;
    /**
     * The type of the additional file, used mainly for adding resource packs to datapacks
     */
    file_type?: VersionFile.file_type | null;
};

export namespace VersionFile {

    /**
     * The type of the additional file, used mainly for adding resource packs to datapacks
     */
    export enum file_type {
        REQUIRED_RESOURCE_PACK = 'required-resource-pack',
        OPTIONAL_RESOURCE_PACK = 'optional-resource-pack',
    }


}
