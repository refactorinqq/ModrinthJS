/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EditableUser } from './EditableUser';

export type User = (EditableUser & {
/**
 * The user's ID
 */
id: string;
/**
 * The user's avatar url
 */
avatar_url: string;
/**
 * The time at which the user was created
 */
created: string;
/**
 * The user's role
 */
role: User.role;
/**
 * Any badges applicable to this user. These are currently unused and undisplayed, and as such are subject to change
 *
 * In order from first to seventh bit, the current bits are:
 * - (unused)
 * - EARLY_MODPACK_ADOPTER
 * - EARLY_RESPACK_ADOPTER
 * - EARLY_PLUGIN_ADOPTER
 * - ALPHA_TESTER
 * - CONTRIBUTOR
 * - TRANSLATOR
 * 
 */
badges?: number;
/**
 * A list of authentication providers you have signed up for (only displayed if requesting your own account)
 */
auth_providers?: Array<string> | null;
/**
 * Whether your email is verified (only displayed if requesting your own account)
 */
email_verified?: boolean | null;
/**
 * Whether you have a password associated with your account (only displayed if requesting your own account)
 */
has_password?: boolean | null;
/**
 * Whether you have TOTP two-factor authentication connected to your account (only displayed if requesting your own account)
 */
has_totp?: boolean | null;
/**
 * Deprecated - this is no longer public for security reasons and is always null
 * @deprecated
 */
github_id?: number | null;
});

export namespace User {

    /**
     * The user's role
     */
    export enum role {
        ADMIN = 'admin',
        MODERATOR = 'moderator',
        DEVELOPER = 'developer',
    }


}
