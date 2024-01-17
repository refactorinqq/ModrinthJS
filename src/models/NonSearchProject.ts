/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseProject } from './BaseProject';
import type { ProjectDonationURL } from './ProjectDonationURL';

export type NonSearchProject = (BaseProject & {
/**
 * A long form description of the project
 */
body?: string;
/**
 * The status of the project
 */
status?: NonSearchProject.status;
/**
 * The requested status when submitting for review or scheduling the project for release
 */
requested_status?: NonSearchProject.requested_status | null;
/**
 * A list of categories which are searchable but non-primary
 */
additional_categories?: Array<string>;
/**
 * An optional link to where to submit bugs or issues with the project
 */
issues_url?: string | null;
/**
 * An optional link to the source code of the project
 */
source_url?: string | null;
/**
 * An optional link to the project's wiki page or other relevant information
 */
wiki_url?: string | null;
/**
 * An optional invite link to the project's discord
 */
discord_url?: string | null;
/**
 * A list of donation links for the project
 */
donation_urls?: Array<ProjectDonationURL>;
});

export namespace NonSearchProject {

    /**
     * The status of the project
     */
    export enum status {
        APPROVED = 'approved',
        ARCHIVED = 'archived',
        REJECTED = 'rejected',
        DRAFT = 'draft',
        UNLISTED = 'unlisted',
        PROCESSING = 'processing',
        WITHHELD = 'withheld',
        SCHEDULED = 'scheduled',
        PRIVATE = 'private',
        UNKNOWN = 'unknown',
    }

    /**
     * The requested status when submitting for review or scheduling the project for release
     */
    export enum requested_status {
        APPROVED = 'approved',
        ARCHIVED = 'archived',
        UNLISTED = 'unlisted',
        PRIVATE = 'private',
        DRAFT = 'draft',
    }


}
