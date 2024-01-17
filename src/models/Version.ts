/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseVersion } from './BaseVersion';
import type { VersionFile } from './VersionFile';

export type Version = (BaseVersion & {
/**
 * The ID of the version, encoded as a base62 string
 */
id: string;
/**
 * The ID of the project this version is for
 */
project_id: string;
/**
 * The ID of the author who published this version
 */
author_id: string;
date_published: string;
/**
 * The number of times this version has been downloaded
 */
downloads: number;
/**
 * A link to the changelog for this version. Always null, only kept for legacy compatibility.
 * @deprecated
 */
changelog_url?: string | null;
/**
 * A list of files available for download for this version
 */
files: Array<VersionFile>;
});
