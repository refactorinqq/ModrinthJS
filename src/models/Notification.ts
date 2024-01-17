/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationAction } from './NotificationAction';

export type Notification = {
    /**
     * The id of the notification
     */
    id: string;
    /**
     * The id of the user who received the notification
     */
    user_id: string;
    /**
     * The type of notification
     */
    type?: Notification.type | null;
    /**
     * The title of the notification
     */
    title: string;
    /**
     * The body text of the notification
     */
    text: string;
    /**
     * A link to the related project or version
     */
    link: string;
    /**
     * Whether the notification has been read or not
     */
    read: boolean;
    /**
     * The time at which the notification was created
     */
    created: string;
    /**
     * A list of actions that can be performed
     */
    actions: Array<NotificationAction>;
};

export namespace Notification {

    /**
     * The type of notification
     */
    export enum type {
        PROJECT_UPDATE = 'project_update',
        TEAM_INVITE = 'team_invite',
        STATUS_CHANGE = 'status_change',
        MODERATOR_MESSAGE = 'moderator_message',
    }


}
