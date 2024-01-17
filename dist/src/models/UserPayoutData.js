"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPayoutData = void 0;
var UserPayoutData;
(function (UserPayoutData) {
    /**
     * The wallet that the user has selected
     */
    let payout_wallet;
    (function (payout_wallet) {
        payout_wallet["PAYPAL"] = "paypal";
        payout_wallet["VENMO"] = "venmo";
    })(payout_wallet = UserPayoutData.payout_wallet || (UserPayoutData.payout_wallet = {}));
    /**
     * The type of the user's wallet
     */
    let payout_wallet_type;
    (function (payout_wallet_type) {
        payout_wallet_type["EMAIL"] = "email";
        payout_wallet_type["PHONE"] = "phone";
        payout_wallet_type["USER_HANDLE"] = "user_handle";
    })(payout_wallet_type = UserPayoutData.payout_wallet_type || (UserPayoutData.payout_wallet_type = {}));
})(UserPayoutData || (exports.UserPayoutData = UserPayoutData = {}));
