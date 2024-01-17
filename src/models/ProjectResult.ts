/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ServerRenderedProject } from './ServerRenderedProject';

export type ProjectResult = (ServerRenderedProject & {
/**
 * The ID of the project
 */
project_id: string;
/**
 * The username of the project's author
 */
author: string;
/**
 * A list of the categories that the project has which are not secondary
 */
display_categories?: Array<string>;
/**
 * A list of the minecraft versions supported by the project
 */
versions: Array<string>;
/**
 * The total number of users following the project
 */
follows: number;
/**
 * The date the project was added to search
 */
date_created: string;
/**
 * The date the project was last modified
 */
date_modified: string;
/**
 * The latest version of minecraft that this project supports
 */
latest_version?: string;
/**
 * The SPDX license ID of a project
 */
license: string;
/**
 * All gallery images attached to the project
 */
gallery?: Array<string>;
/**
 * The featured gallery image of the project
 */
featured_gallery?: string | null;
});
