"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadMessageBody = void 0;
var ThreadMessageBody;
(function (ThreadMessageBody) {
    /**
     * The type of message
     */
    let type;
    (function (type) {
        type["STATUS_CHANGE"] = "status_change";
        type["TEXT"] = "text";
        type["THREAD_CLOSURE"] = "thread_closure";
        type["DELETED"] = "deleted";
    })(type = ThreadMessageBody.type || (ThreadMessageBody.type = {}));
    /**
     * The old status of the project. **Only present for `status_change` message type**
     */
    let old_status;
    (function (old_status) {
        old_status["APPROVED"] = "approved";
        old_status["ARCHIVED"] = "archived";
        old_status["REJECTED"] = "rejected";
        old_status["DRAFT"] = "draft";
        old_status["UNLISTED"] = "unlisted";
        old_status["PROCESSING"] = "processing";
        old_status["WITHHELD"] = "withheld";
        old_status["SCHEDULED"] = "scheduled";
        old_status["PRIVATE"] = "private";
        old_status["UNKNOWN"] = "unknown";
    })(old_status = ThreadMessageBody.old_status || (ThreadMessageBody.old_status = {}));
    /**
     * The new status of the project. **Only present for `status_change` message type**
     */
    let new_status;
    (function (new_status) {
        new_status["APPROVED"] = "approved";
        new_status["ARCHIVED"] = "archived";
        new_status["REJECTED"] = "rejected";
        new_status["DRAFT"] = "draft";
        new_status["UNLISTED"] = "unlisted";
        new_status["PROCESSING"] = "processing";
        new_status["WITHHELD"] = "withheld";
        new_status["SCHEDULED"] = "scheduled";
        new_status["PRIVATE"] = "private";
        new_status["UNKNOWN"] = "unknown";
    })(new_status = ThreadMessageBody.new_status || (ThreadMessageBody.new_status = {}));
})(ThreadMessageBody || (exports.ThreadMessageBody = ThreadMessageBody = {}));
