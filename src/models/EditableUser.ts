/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserPayoutData } from './UserPayoutData';

export type EditableUser = {
    /**
     * The user's username
     */
    username: string;
    /**
     * The user's display name
     */
    name?: string | null;
    /**
     * The user's email (only displayed if requesting your own account). Requires `USER_READ_EMAIL` PAT scope.
     */
    email?: string | null;
    /**
     * A description of the user
     */
    bio?: string;
    payout_data?: UserPayoutData;
};
