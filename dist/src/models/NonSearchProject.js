"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonSearchProject = void 0;
var NonSearchProject;
(function (NonSearchProject) {
    /**
     * The status of the project
     */
    let status;
    (function (status) {
        status["APPROVED"] = "approved";
        status["ARCHIVED"] = "archived";
        status["REJECTED"] = "rejected";
        status["DRAFT"] = "draft";
        status["UNLISTED"] = "unlisted";
        status["PROCESSING"] = "processing";
        status["WITHHELD"] = "withheld";
        status["SCHEDULED"] = "scheduled";
        status["PRIVATE"] = "private";
        status["UNKNOWN"] = "unknown";
    })(status = NonSearchProject.status || (NonSearchProject.status = {}));
    /**
     * The requested status when submitting for review or scheduling the project for release
     */
    let requested_status;
    (function (requested_status) {
        requested_status["APPROVED"] = "approved";
        requested_status["ARCHIVED"] = "archived";
        requested_status["UNLISTED"] = "unlisted";
        requested_status["PRIVATE"] = "private";
        requested_status["DRAFT"] = "draft";
    })(requested_status = NonSearchProject.requested_status || (NonSearchProject.requested_status = {}));
})(NonSearchProject || (exports.NonSearchProject = NonSearchProject = {}));
