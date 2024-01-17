/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A list of hashes and the algorithm used to create them
 */
export type HashList = {
    hashes: Array<string>;
    algorithm: HashList.algorithm;
};

export namespace HashList {

    export enum algorithm {
        SHA1 = 'sha1',
        SHA512 = 'sha512',
    }


}
