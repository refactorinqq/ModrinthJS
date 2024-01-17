/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GalleryImage } from './GalleryImage';
import type { ModeratorMessage } from './ModeratorMessage';
import type { NonSearchProject } from './NonSearchProject';
import type { ProjectLicense } from './ProjectLicense';
import type { ServerRenderedProject } from './ServerRenderedProject';

export type Project = (NonSearchProject & ServerRenderedProject & {
/**
 * The ID of the project, encoded as a base62 string
 */
id: string;
/**
 * The ID of the team that has ownership of this project
 */
team: string;
/**
 * The link to the long description of the project. Always null, only kept for legacy compatibility.
 * @deprecated
 */
body_url?: string | null;
moderator_message?: ModeratorMessage;
/**
 * The date the project was published
 */
published: string;
/**
 * The date the project was last updated
 */
updated: string;
/**
 * The date the project's status was set to an approved status
 */
approved?: string | null;
/**
 * The date the project's status was submitted to moderators for review
 */
queued?: string | null;
/**
 * The total number of users following the project
 */
followers: number;
license?: ProjectLicense;
/**
 * A list of the version IDs of the project (will never be empty unless `draft` status)
 */
versions?: Array<string>;
/**
 * A list of all of the game versions supported by the project
 */
game_versions?: Array<string>;
/**
 * A list of all of the loaders supported by the project
 */
loaders?: Array<string>;
/**
 * A list of images that have been uploaded to the project's gallery
 */
gallery?: Array<GalleryImage>;
});
