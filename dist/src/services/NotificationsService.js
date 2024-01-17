"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class NotificationsService {
    /**
     * Get user's notifications
     * @param idUsername The ID or username of the user
     * @returns Notification Expected response to a valid request
     * @throws ApiError
     */
    static getUserNotifications(idUsername) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getNotification(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static readNotification(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteNotification(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getNotifications(ids) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static readNotifications(ids) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteNotifications(ids) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.NotificationsService = NotificationsService;
