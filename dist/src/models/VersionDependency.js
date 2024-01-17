"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionDependency = void 0;
var VersionDependency;
(function (VersionDependency) {
    /**
     * The type of dependency that this version has
     */
    let dependency_type;
    (function (dependency_type) {
        dependency_type["REQUIRED"] = "required";
        dependency_type["OPTIONAL"] = "optional";
        dependency_type["INCOMPATIBLE"] = "incompatible";
        dependency_type["EMBEDDED"] = "embedded";
    })(dependency_type = VersionDependency.dependency_type || (VersionDependency.dependency_type = {}));
})(VersionDependency || (exports.VersionDependency = VersionDependency = {}));
