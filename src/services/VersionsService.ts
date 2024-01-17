/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVersionBody } from '../models/CreateVersionBody';
import type { EditableVersion } from '../models/EditableVersion';
import type { Schedule } from '../models/Schedule';
import type { Version } from '../models/Version';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VersionsService {

    /**
     * List project's versions
     * @param idSlug The ID or slug of the project
     * @param loaders The types of loaders to filter for
     * @param gameVersions The game versions to filter for
     * @param featured Allows to filter for featured or non-featured versions only
     * @returns Version Expected response to a valid request
     * @throws ApiError
     */
    public static getProjectVersions(
idSlug: string,
loaders?: string,
gameVersions?: string,
featured?: boolean,
): CancelablePromise<Array<Version>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{id|slug}/version',
            path: {
                'id|slug': idSlug,
            },
            query: {
                'loaders': loaders,
                'game_versions': gameVersions,
                'featured': featured,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Get a version
     * @param id The ID of the version
     * @returns Version Expected response to a valid request
     * @throws ApiError
     */
    public static getVersion(
id: string,
): CancelablePromise<Version> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/version/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Modify a version
     * @param id The ID of the version
     * @param requestBody Modified version fields
     * @returns void 
     * @throws ApiError
     */
    public static modifyVersion(
id: string,
requestBody?: EditableVersion,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/version/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Delete a version
     * @param id The ID of the version
     * @returns void 
     * @throws ApiError
     */
    public static deleteVersion(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/version/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Get a version given a version number or ID
     * Please note that, if the version number provided matches multiple versions, only the **oldest matching version** will be returned.
     * @param idSlug The ID or slug of the project
     * @param idNumber The version ID or version number
     * @returns Version Expected response to a valid request
     * @throws ApiError
     */
    public static getVersionFromIdOrNumber(
idSlug: string,
idNumber: string,
): CancelablePromise<Version> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{id|slug}/version/{id|number}',
            path: {
                'id|slug': idSlug,
                'id|number': idNumber,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Create a version
     * This route creates a version on an existing project. There must be at least one file attached to each new version, unless the new version's status is `draft`. `.mrpack`, `.jar`, `.zip`, and `.litemod` files are accepted.
 *
 * The request is a [multipart request](https://www.ietf.org/rfc/rfc2388.txt) with at least two form fields: one is `data`, which includes a JSON body with the version metadata as shown below, and at least one field containing an upload file.
 *
 * You can name the file parts anything you would like, but you must list each of the parts' names in `file_parts`, and optionally, provide one to use as the primary file in `primary_file`.
 * 
     * @param formData New version
     * @returns Version Expected response to a valid request
     * @throws ApiError
     */
    public static createVersion(
formData?: CreateVersionBody,
): CancelablePromise<Version> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/version',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Schedule a version
     * @param id The ID of the version
     * @param requestBody Information about date and requested status
     * @returns void 
     * @throws ApiError
     */
    public static scheduleVersion(
id: string,
requestBody?: Schedule,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/version/{id}/schedule',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Get multiple versions
     * @param ids The IDs of the versions
     * @returns Version Expected response to a valid request
     * @throws ApiError
     */
    public static getVersions(
ids: string,
): CancelablePromise<Array<Version>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/versions',
            query: {
                'ids': ids,
            },
        });
    }

    /**
     * Add files to version
     * Project files are attached. `.mrpack` and `.jar` files are accepted.
     * @param id The ID of the version
     * @param formData New version files
     * @returns void 
     * @throws ApiError
     */
    public static addFilesToVersion(
id: string,
formData?: {
data?: Record<string, any>;
},
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/version/{id}/file',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

}
