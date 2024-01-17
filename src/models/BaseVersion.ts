/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VersionDependency } from './VersionDependency';

export type BaseVersion = {
    /**
     * The name of this version
     */
    name?: string;
    /**
     * The version number. Ideally will follow semantic versioning
     */
    version_number?: string;
    /**
     * The changelog for this version
     */
    changelog?: string | null;
    /**
     * A list of specific versions of projects that this version depends on
     */
    dependencies?: Array<VersionDependency>;
    /**
     * A list of versions of Minecraft that this version supports
     */
    game_versions?: Array<string>;
    /**
     * The release channel for this version
     */
    version_type?: BaseVersion.version_type;
    /**
     * The mod loaders that this version supports
     */
    loaders?: Array<string>;
    /**
     * Whether the version is featured or not
     */
    featured?: boolean;
    status?: BaseVersion.status;
    requested_status?: BaseVersion.requested_status | null;
};

export namespace BaseVersion {

    /**
     * The release channel for this version
     */
    export enum version_type {
        RELEASE = 'release',
        BETA = 'beta',
        ALPHA = 'alpha',
    }

    export enum status {
        LISTED = 'listed',
        ARCHIVED = 'archived',
        DRAFT = 'draft',
        UNLISTED = 'unlisted',
        SCHEDULED = 'scheduled',
        UNKNOWN = 'unknown',
    }

    export enum requested_status {
        LISTED = 'listed',
        ARCHIVED = 'archived',
        DRAFT = 'draft',
        UNLISTED = 'unlisted',
    }


}
