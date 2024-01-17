"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
var Notification;
(function (Notification) {
    /**
     * The type of notification
     */
    let type;
    (function (type) {
        type["PROJECT_UPDATE"] = "project_update";
        type["TEAM_INVITE"] = "team_invite";
        type["STATUS_CHANGE"] = "status_change";
        type["MODERATOR_MESSAGE"] = "moderator_message";
    })(type = Notification.type || (Notification.type = {}));
})(Notification || (exports.Notification = Notification = {}));
