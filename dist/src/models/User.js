"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User;
(function (User) {
    /**
     * The user's role
     */
    let role;
    (function (role) {
        role["ADMIN"] = "admin";
        role["MODERATOR"] = "moderator";
        role["DEVELOPER"] = "developer";
    })(role = User.role || (User.role = {}));
})(User || (exports.User = User = {}));
