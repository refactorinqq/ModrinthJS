/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryTag } from '../models/CategoryTag';
import type { DonationPlatformTag } from '../models/DonationPlatformTag';
import type { GameVersionTag } from '../models/GameVersionTag';
import type { License } from '../models/License';
import type { LicenseTag } from '../models/LicenseTag';
import type { LoaderTag } from '../models/LoaderTag';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TagsService {

    /**
     * Get a list of categories
     * Gets an array of categories, their icons, and applicable project types
     * @returns CategoryTag Expected response to a valid request
     * @throws ApiError
     */
    public static categoryList(): CancelablePromise<Array<CategoryTag>> {
        return __request(OpenAPI, {
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
    public static loaderList(): CancelablePromise<Array<LoaderTag>> {
        return __request(OpenAPI, {
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
    public static versionList(): CancelablePromise<Array<GameVersionTag>> {
        return __request(OpenAPI, {
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
    public static licenseList(): CancelablePromise<Array<LicenseTag>> {
        return __request(OpenAPI, {
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
    public static licenseText(
id: string,
): CancelablePromise<License> {
        return __request(OpenAPI, {
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
    public static donationPlatformList(): CancelablePromise<Array<DonationPlatformTag>> {
        return __request(OpenAPI, {
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
    public static reportTypeList(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
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
    public static projectTypeList(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
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
    public static sideTypeList(): CancelablePromise<Array<string>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tag/side_type',
        });
    }

}
