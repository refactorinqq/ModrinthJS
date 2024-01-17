"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameVersionTag = void 0;
var GameVersionTag;
(function (GameVersionTag) {
    /**
     * The type of the game version
     */
    let version_type;
    (function (version_type) {
        version_type["RELEASE"] = "release";
        version_type["SNAPSHOT"] = "snapshot";
        version_type["ALPHA"] = "alpha";
        version_type["BETA"] = "beta";
    })(version_type = GameVersionTag.version_type || (GameVersionTag.version_type = {}));
})(GameVersionTag || (exports.GameVersionTag = GameVersionTag = {}));
