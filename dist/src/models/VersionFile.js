"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionFile = void 0;
var VersionFile;
(function (VersionFile) {
    /**
     * The type of the additional file, used mainly for adding resource packs to datapacks
     */
    let file_type;
    (function (file_type) {
        file_type["REQUIRED_RESOURCE_PACK"] = "required-resource-pack";
        file_type["OPTIONAL_RESOURCE_PACK"] = "optional-resource-pack";
    })(file_type = VersionFile.file_type || (VersionFile.file_type = {}));
})(VersionFile || (exports.VersionFile = VersionFile = {}));
