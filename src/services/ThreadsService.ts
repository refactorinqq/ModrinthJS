/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatableReport } from '../models/CreatableReport';
import type { Report } from '../models/Report';
import type { Thread } from '../models/Thread';
import type { ThreadMessageBody } from '../models/ThreadMessageBody';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ThreadsService {

    /**
     * Report a project, user, or version
     * Bring a project, user, or version to the attention of the moderators by reporting it.
     * @param requestBody The report to be sent
     * @returns Report Expected response to a valid request
     * @throws ApiError
     */
    public static submitReport(
requestBody?: CreatableReport,
): CancelablePromise<Report> {
        return __request(OpenAPI, {
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
    public static getOpenReports(
count?: number,
): CancelablePromise<Array<Report>> {
        return __request(OpenAPI, {
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
    public static getReport(
id: string,
): CancelablePromise<Report> {
        return __request(OpenAPI, {
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
    public static modifyReport(
id: string,
requestBody?: {
/**
 * The contents of the report
 */
body?: string;
/**
 * Whether the thread should be closed
 */
closed?: boolean;
},
): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getReports(
ids: string,
): CancelablePromise<Array<Report>> {
        return __request(OpenAPI, {
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
    public static getThread(
id: string,
): CancelablePromise<Thread> {
        return __request(OpenAPI, {
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
    public static sendThreadMessage(
id: string,
requestBody?: ThreadMessageBody,
): CancelablePromise<Thread> {
        return __request(OpenAPI, {
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
    public static getThreads(
ids: string,
): CancelablePromise<Array<Thread>> {
        return __request(OpenAPI, {
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
    public static deleteThreadMessage(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
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
