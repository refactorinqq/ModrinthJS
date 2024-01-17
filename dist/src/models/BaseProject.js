"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseProject = void 0;
var BaseProject;
(function (BaseProject) {
    /**
     * The client side support of the project
     */
    let client_side;
    (function (client_side) {
        client_side["REQUIRED"] = "required";
        client_side["OPTIONAL"] = "optional";
        client_side["UNSUPPORTED"] = "unsupported";
    })(client_side = BaseProject.client_side || (BaseProject.client_side = {}));
    /**
     * The server side support of the project
     */
    let server_side;
    (function (server_side) {
        server_side["REQUIRED"] = "required";
        server_side["OPTIONAL"] = "optional";
        server_side["UNSUPPORTED"] = "unsupported";
    })(server_side = BaseProject.server_side || (BaseProject.server_side = {}));
})(BaseProject || (exports.BaseProject = BaseProject = {}));
