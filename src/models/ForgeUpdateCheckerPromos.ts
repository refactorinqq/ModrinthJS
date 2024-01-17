/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * A list of the recommended and latest versions for each Minecraft release
 */
export type ForgeUpdateCheckerPromos = {
    /**
     * The mod version that is recommended for `{version}`. Excludes versions with the `alpha` and `beta` version types.
     */
    '{version}-recommended'?: string;
    /**
     * The latest mod version for `{version}`. Shows versions with the `alpha` and `beta` version types.
     */
    '{version}-latest'?: string;
};
