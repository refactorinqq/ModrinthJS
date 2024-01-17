/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatableReport } from './CreatableReport';

export type Report = (CreatableReport & {
/**
 * The ID of the report
 */
id?: string;
/**
 * The ID of the user who reported the item
 */
reporter: string;
/**
 * The time at which the report was created
 */
created: string;
/**
 * Whether the report is resolved
 */
closed: boolean;
/**
 * The ID of the moderation thread associated with this report
 */
thread_id: string;
});
