"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class TagsService {
    /**
     * Get a list of categories
     * Gets an array of categories, their icons, and applicable project types
     * @returns CategoryTag Expected response to a valid request
     * @throws ApiError
     */
    static categoryList() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/category',
        });
    }
    /**
     * Get a list of loaders
     * Gets an array of loaders, their icons, and supported project types
     * @returns LoaderTag Expected response to a valid request
     * @throws ApiError
     */
    static loaderList() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/loader',
        });
    }
    /**
     * Get a list of game versions
     * Gets an array of game versions and information about them
     * @returns GameVersionTag Expected response to a valid request
     * @throws ApiError
     */
    static versionList() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/game_version',
        });
    }
    /**
     * @deprecated
     * Get a list of licenses
     * Deprecated - simply use SPDX IDs.
     * @returns LicenseTag Expected response to a valid request
     * @throws ApiError
     */
    static licenseList() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/license',
        });
    }
    /**
     * Get the text and title of a license
     * @param id The license ID to get the text of
     * @returns License Expected response to a valid request
     * @throws ApiError
     */
    static licenseText(id) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/license/{id}',
            path: {
                'id': id,
            },
            errors: {
                400: `Request was invalid, see given error`,
            },
        });
    }
    /**
     * Get a list of donation platforms
     * Gets an array of donation platforms and information about them
     * @returns DonationPlatformTag Expected response to a valid request
     * @throws ApiError
     */
    static donationPlatformList() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/donation_platform',
        });
    }
    /**
     * Get a list of report types
     * Gets an array of valid report types
     * @returns string Expected response to a valid request
     * @throws ApiError
     */
    static reportTypeList() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/report_type',
        });
    }
    /**
     * Get a list of project types
     * Gets an array of valid project types
     * @returns string Expected response to a valid request
     * @throws ApiError
     */
    static projectTypeList() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/project_type',
        });
    }
    /**
     * Get a list of side types
     * Gets an array of valid side types
     * @returns string Expected response to a valid request
     * @throws ApiError
     */
    static sideTypeList() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/tag/side_type',
        });
    }
}
exports.TagsService = TagsService;
