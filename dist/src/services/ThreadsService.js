"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class ThreadsService {
    /**
     * Report a project, user, or version
     * Bring a project, user, or version to the attention of the moderators by reporting it.
     * @param requestBody The report to be sent
     * @returns Report Expected response to a valid request
     * @throws ApiError
     */
    static submitReport(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/report',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get your open reports
     * @param count
     * @returns Report Expected response to a valid request
     * @throws ApiError
     */
    static getOpenReports(count) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/report',
            query: {
                'count': count,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get report from ID
     * @param id The ID of the report
     * @returns Report Expected response to a valid request
     * @throws ApiError
     */
    static getReport(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/report/{id}',
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
     * Modify a report
     * @param id The ID of the report
     * @param requestBody What to modify about the report
     * @returns void
     * @throws ApiError
     */
    static modifyReport(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/report/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get multiple reports
     * @param ids The IDs of the reports
     * @returns Report Expected response to a valid request
     * @throws ApiError
     */
    static getReports(ids) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/reports',
            query: {
                'ids': ids,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get a thread
     * @param id The ID of the thread
     * @returns Thread Expected response to a valid request
     * @throws ApiError
     */
    static getThread(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/thread/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Send a text message to a thread
     * @param id The ID of the thread
     * @param requestBody The message to be sent. Note that you only need the fields applicable for the `text` type.
     * @returns Thread Expected response to a valid request
     * @throws ApiError
     */
    static sendThreadMessage(id, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/thread/{id}',
            path: {
                'id': id,
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
     * Get multiple threads
     * @param ids The IDs of the threads
     * @returns Thread Expected response to a valid request
     * @throws ApiError
     */
    static getThreads(ids) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/threads',
            query: {
                'ids': ids,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Delete a thread message
     * @param id The ID of the message
     * @returns void
     * @throws ApiError
     */
    static deleteThreadMessage(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/message/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
}
exports.ThreadsService = ThreadsService;
