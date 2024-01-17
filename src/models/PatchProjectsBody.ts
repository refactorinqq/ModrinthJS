/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectDonationURL } from './ProjectDonationURL';

export type PatchProjectsBody = {
    /**
     * Set all of the categories to the categories specified here
     */
    categories?: Array<string>;
    /**
     * Add all of the categories specified here
     */
    add_categories?: Array<string>;
    /**
     * Remove all of the categories specified here
     */
    remove_categories?: Array<string>;
    /**
     * Set all of the additional categories to the categories specified here
     */
    additional_categories?: Array<string>;
    /**
     * Add all of the additional categories specified here
     */
    add_additional_categories?: Array<string>;
    /**
     * Remove all of the additional categories specified here
     */
    remove_additional_categories?: Array<string>;
    /**
     * Set all of the donation links to the donation links specified here
     */
    donation_urls?: Array<ProjectDonationURL>;
    /**
     * Add all of the donation links specified here
     */
    add_donation_urls?: Array<ProjectDonationURL>;
    /**
     * Remove all of the donation links specified here
     */
    remove_donation_urls?: Array<ProjectDonationURL>;
    /**
     * An optional link to where to submit bugs or issues with the projects
     */
    issues_url?: string | null;
    /**
     * An optional link to the source code of the projects
     */
    source_url?: string | null;
    /**
     * An optional link to the projects' wiki page or other relevant information
     */
    wiki_url?: string | null;
    /**
     * An optional invite link to the projects' discord
     */
    discord_url?: string | null;
};
