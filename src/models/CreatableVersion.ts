/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseVersion } from './BaseVersion';

export type CreatableVersion = (BaseVersion & {
/**
 * The ID of the project this version is for
 */
project_id: string;
/**
 * An array of the multipart field names of each file that goes with this version
 */
file_parts: Array<string>;
/**
 * The multipart field name of the primary file
 */
primary_file?: string;
});
