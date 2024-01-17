/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ModifiableProject } from './ModifiableProject';

export type EditableProject = (ModifiableProject & {
/**
 * The title of the moderators' message for the project
 */
moderation_message?: string | null;
/**
 * The body of the moderators' message for the project
 */
moderation_message_body?: string | null;
});
