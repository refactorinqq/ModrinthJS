/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EditableUser } from '../models/EditableUser';
import type { Project } from '../models/Project';
import type { User } from '../models/User';
import type { UserPayoutHistory } from '../models/UserPayoutHistory';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Get a user
     * @param idUsername The ID or username of the user
     * @returns User Expected response to a valid request
     * @throws ApiError
     */
    public static getUser(
idUsername: string,
): CancelablePromise<User> {
        return __request(OpenAPI, {
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
    public static modifyUser(
idUsername: string,
requestBody?: EditableUser,
): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getUserFromAuth(): CancelablePromise<User> {
        return __request(OpenAPI, {
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
    public static getUsers(
ids: string,
): CancelablePromise<Array<User>> {
        return __request(OpenAPI, {
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
    public static changeUserIcon(
idUsername: string,
requestBody?: Blob,
): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getUserProjects(
idUsername: string,
): CancelablePromise<Array<Project>> {
        return __request(OpenAPI, {
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
    public static getFollowedProjects(
idUsername: string,
): CancelablePromise<Array<Project>> {
        return __request(OpenAPI, {
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
    public static getPayoutHistory(
idUsername: string,
): CancelablePromise<UserPayoutHistory> {
        return __request(OpenAPI, {
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
    public static withdrawPayout(
idUsername: string,
amount: number,
): CancelablePromise<void> {
        return __request(OpenAPI, {
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
