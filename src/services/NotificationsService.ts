/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notification } from '../models/Notification';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationsService {

    /**
     * Get user's notifications
     * @param idUsername The ID or username of the user
     * @returns Notification Expected response to a valid request
     * @throws ApiError
     */
    public static getUserNotifications(
idUsername: string,
): CancelablePromise<Array<Notification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user/{id|username}/notifications',
            path: {
                'id|username': idUsername,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Get notification from ID
     * @param id The ID of the notification
     * @returns Notification Expected response to a valid request
     * @throws ApiError
     */
    public static getNotification(
id: string,
): CancelablePromise<Notification> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notification/{id}',
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
     * Mark notification as read
     * @param id The ID of the notification
     * @returns void 
     * @throws ApiError
     */
    public static readNotification(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/notification/{id}',
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
     * Delete notification
     * @param id The ID of the notification
     * @returns void 
     * @throws ApiError
     */
    public static deleteNotification(
id: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notification/{id}',
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
     * Get multiple notifications
     * @param ids The IDs of the notifications
     * @returns Notification Expected response to a valid request
     * @throws ApiError
     */
    public static getNotifications(
ids: string,
): CancelablePromise<Array<Notification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications',
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
     * Mark multiple notifications as read
     * @param ids The IDs of the notifications
     * @returns void 
     * @throws ApiError
     */
    public static readNotifications(
ids: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/notifications',
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
     * Delete multiple notifications
     * @param ids The IDs of the notifications
     * @returns void 
     * @throws ApiError
     */
    public static deleteNotifications(
ids: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications',
            query: {
                'ids': ids,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

}
