/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetLatestVersionFromHashBody } from '../models/GetLatestVersionFromHashBody';
import type { GetLatestVersionsFromHashesBody } from '../models/GetLatestVersionsFromHashesBody';
import type { HashList } from '../models/HashList';
import type { HashVersionMap } from '../models/HashVersionMap';
import type { Version } from '../models/Version';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VersionFilesService {

    /**
     * Get version from hash
     * @param hash The hash of the file, considering its byte content, and encoded in hexadecimal
     * @param algorithm The algorithm of the hash
     * @param multiple Whether to return multiple results when looking for this hash
     * @returns Version Expected response to a valid request
     * @throws ApiError
     */
    public static versionFromHash(
hash: string,
algorithm: 'sha1' | 'sha512' = 'sha1',
multiple: boolean = false,
): CancelablePromise<Version> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/version_file/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'algorithm': algorithm,
                'multiple': multiple,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Delete a file from its hash
     * @param hash The hash of the file, considering its byte content, and encoded in hexadecimal
     * @param algorithm The algorithm of the hash
     * @param versionId Version ID to delete the version from, if multiple files of the same hash exist
     * @returns void 
     * @throws ApiError
     */
    public static deleteFileFromHash(
hash: string,
algorithm: 'sha1' | 'sha512' = 'sha1',
versionId?: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/version_file/{hash}',
            path: {
                'hash': hash,
            },
            query: {
                'algorithm': algorithm,
                'version_id': versionId,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Latest version of a project from a hash, loader(s), and game version(s)
     * @param hash The hash of the file, considering its byte content, and encoded in hexadecimal
     * @param algorithm The algorithm of the hash
     * @param requestBody Parameters of the updated version requested
     * @returns Version Expected response to a valid request
     * @throws ApiError
     */
    public static getLatestVersionFromHash(
hash: string,
algorithm: 'sha1' | 'sha512' = 'sha1',
requestBody?: GetLatestVersionFromHashBody,
): CancelablePromise<Version> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/version_file/{hash}/update',
            path: {
                'hash': hash,
            },
            query: {
                'algorithm': algorithm,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was invalid, see given error`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Get versions from hashes
     * This is the same as [`/version_file/{hash}`](#operation/versionFromHash) except it accepts multiple hashes.
     * @param requestBody Hashes and algorithm of the versions requested
     * @returns HashVersionMap Expected response to a valid request
     * @throws ApiError
     */
    public static versionsFromHashes(
requestBody?: HashList,
): CancelablePromise<HashVersionMap> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/version_files',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was invalid, see given error`,
            },
        });
    }

    /**
     * Latest versions of multiple project from hashes, loader(s), and game version(s)
     * This is the same as [`/version_file/{hash}/update`](#operation/getLatestVersionFromHash) except it accepts multiple hashes.
     * @param requestBody Parameters of the updated version requested
     * @returns HashVersionMap Expected response to a valid request
     * @throws ApiError
     */
    public static getLatestVersionsFromHashes(
requestBody?: GetLatestVersionsFromHashesBody,
): CancelablePromise<HashVersionMap> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/version_files/update',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was invalid, see given error`,
            },
        });
    }

}
