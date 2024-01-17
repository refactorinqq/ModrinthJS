/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ThreadMessageBody } from './ThreadMessageBody';

export type ThreadMessage = {
    /**
     * The ID of the message itself
     */
    id: string;
    /**
     * The ID of the author
     */
    author_id?: string | null;
    body: ThreadMessageBody;
    /**
     * The time at which the message was created
     */
    created: string;
};
