"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class UsersService {
    /**
     * Get a user
     * @param idUsername The ID or username of the user
     * @returns User Expected response to a valid request
     * @throws ApiError
     */
    static getUser(idUsername) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/{id|username}',
            path: {
                'id|username': idUsername,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Modify a user
     * @param idUsername The ID or username of the user
     * @param requestBody Modified user fields
     * @returns void
     * @throws ApiError
     */
    static modifyUser(idUsername, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/user/{id|username}',
            path: {
                'id|username': idUsername,
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
     * Get user from authorization header
     * @returns User Expected response to a valid request
     * @throws ApiError
     */
    static getUserFromAuth() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user',
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get multiple users
     * @param ids The IDs of the users
     * @returns User Expected response to a valid request
     * @throws ApiError
     */
    static getUsers(ids) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'ids': ids,
            },
        });
    }
    /**
     * Change user's avatar
     * The new avatar may be up to 2MiB in size.
     * @param idUsername The ID or username of the user
     * @param requestBody
     * @returns void
     * @throws ApiError
     */
    static changeUserIcon(idUsername, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PATCH',
            url: '/user/{id|username}/icon',
            path: {
                'id|username': idUsername,
            },
            body: requestBody,
            mediaType: 'image/png',
            errors: {
                400: `Request was invalid, see given error`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get user's projects
     * @param idUsername The ID or username of the user
     * @returns Project Expected response to a valid request
     * @throws ApiError
     */
    static getUserProjects(idUsername) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/{id|username}/projects',
            path: {
                'id|username': idUsername,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
    /**
     * Get user's followed projects
     * @param idUsername The ID or username of the user
     * @returns Project Expected response to a valid request
     * @throws ApiError
     */
    static getFollowedProjects(idUsername) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/{id|username}/follows',
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
     * Get user's payout history
     * @param idUsername The ID or username of the user
     * @returns UserPayoutHistory Expected response to a valid request
     * @throws ApiError
     */
    static getPayoutHistory(idUsername) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/user/{id|username}/payouts',
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
     * Withdraw payout balance to PayPal or Venmo
     * Warning: certain amounts get withheld for fees. Please do not call this API endpoint without first acknowledging the warnings on the corresponding frontend page.
     * @param idUsername The ID or username of the user
     * @param amount Amount to withdraw
     * @returns void
     * @throws ApiError
     */
    static withdrawPayout(idUsername, amount) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'POST',
            url: '/user/{id|username}/payouts',
            path: {
                'id|username': idUsername,
            },
            query: {
                'amount': amount,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }
}
exports.UsersService = UsersService;
