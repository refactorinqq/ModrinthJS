/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An action that can be performed on a notification
 */
export type NotificationAction = {
    /**
     * The friendly name for this action
     */
    title?: string;
    /**
     * The HTTP code and path to request in order to perform this action.
     */
    action_route?: Array<string>;
};
