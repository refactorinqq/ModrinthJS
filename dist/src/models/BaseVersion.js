"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseVersion = void 0;
var BaseVersion;
(function (BaseVersion) {
    /**
     * The release channel for this version
     */
    let version_type;
    (function (version_type) {
        version_type["RELEASE"] = "release";
        version_type["BETA"] = "beta";
        version_type["ALPHA"] = "alpha";
    })(version_type = BaseVersion.version_type || (BaseVersion.version_type = {}));
    let status;
    (function (status) {
        status["LISTED"] = "listed";
        status["ARCHIVED"] = "archived";
        status["DRAFT"] = "draft";
        status["UNLISTED"] = "unlisted";
        status["SCHEDULED"] = "scheduled";
        status["UNKNOWN"] = "unknown";
    })(status = BaseVersion.status || (BaseVersion.status = {}));
    let requested_status;
    (function (requested_status) {
        requested_status["LISTED"] = "listed";
        requested_status["ARCHIVED"] = "archived";
        requested_status["DRAFT"] = "draft";
        requested_status["UNLISTED"] = "unlisted";
    })(requested_status = BaseVersion.requested_status || (BaseVersion.requested_status = {}));
})(BaseVersion || (exports.BaseVersion = BaseVersion = {}));
