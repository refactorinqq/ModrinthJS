/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type TeamMember = {
    /**
     * The ID of the team this team member is a member of
     */
    team_id: string;
    user: User;
    /**
     * The user's role on the team
     */
    role: string;
    /**
     * The user's permissions in bitfield format (requires authorization to view)
 *
 * In order from first to tenth bit, the bits are:
 * - UPLOAD_VERSION
 * - DELETE_VERSION
 * - EDIT_DETAILS
 * - EDIT_BODY
 * - MANAGE_INVITES
 * - REMOVE_MEMBER
 * - EDIT_MEMBER
 * - DELETE_PROJECT
 * - VIEW_ANALYTICS
 * - VIEW_PAYOUTS
 * 
     */
    permissions?: number;
    /**
     * Whether or not the user has accepted to be on the team (requires authorization to view)
     */
    accepted: boolean;
    /**
     * The split of payouts going to this user. The proportion of payouts they get is their split divided by the sum of the splits of all members.
     */
    payouts_split?: number;
    /**
     * The order of the team member.
     */
    ordering?: number;
};
