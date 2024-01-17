"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
var Schedule;
(function (Schedule) {
    /**
     * The requested status when scheduling the project for release
     */
    let requested_status;
    (function (requested_status) {
        requested_status["APPROVED"] = "approved";
        requested_status["ARCHIVED"] = "archived";
        requested_status["UNLISTED"] = "unlisted";
        requested_status["PRIVATE"] = "private";
        requested_status["DRAFT"] = "draft";
    })(requested_status = Schedule.requested_status || (Schedule.requested_status = {}));
})(Schedule || (exports.Schedule = Schedule = {}));
