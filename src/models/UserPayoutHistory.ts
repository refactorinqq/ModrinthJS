/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserPayoutHistoryEntry } from './UserPayoutHistoryEntry';

export type UserPayoutHistory = {
    /**
     * The all-time balance accrued by this user in USD
     */
    all_time?: string;
    /**
     * The amount in USD made by the user in the previous 30 days
     */
    last_month?: string;
    /**
     * A history of all of the user's past transactions
     */
    payouts?: Array<UserPayoutHistoryEntry>;
};
