/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Various data relating to the user's payouts status (you can only see your own)
 */
export type UserPayoutData = {
    /**
     * The payout balance available for the user to withdraw (note, you cannot modify this in a PATCH request)
     */
    balance?: number;
    /**
     * The wallet that the user has selected
     */
    payout_wallet?: UserPayoutData.payout_wallet;
    /**
     * The type of the user's wallet
     */
    payout_wallet_type?: UserPayoutData.payout_wallet_type;
    /**
     * The user's payout address
     */
    payout_address?: string;
};

export namespace UserPayoutData {

    /**
     * The wallet that the user has selected
     */
    export enum payout_wallet {
        PAYPAL = 'paypal',
        VENMO = 'venmo',
    }

    /**
     * The type of the user's wallet
     */
    export enum payout_wallet_type {
        EMAIL = 'email',
        PHONE = 'phone',
        USER_HANDLE = 'user_handle',
    }


}
