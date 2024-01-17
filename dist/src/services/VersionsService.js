"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class VersionsService {
    /**
     * List project's versions
     * @param idSlug The ID or slug of the project
     * @param loaders The types of loaders to filter for
     * @param gameVersions The game versions to filter for
     * @param featured Allows to filter for featured or non-featured versions only
     * @returns Version Expected response to a valid request
     * @throws ApiError
     */
    static getProjectVersions(idSlug, loaders, gameVersions, featured) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getVersion(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static modifyVersion(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteVersion(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getVersionFromIdOrNumber(idSlug, idNumber) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static createVersion(formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static scheduleVersion(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getVersions(ids) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static addFilesToVersion(id, formData) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.VersionsService = VersionsService;
