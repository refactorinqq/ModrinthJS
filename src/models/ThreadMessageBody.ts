/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The contents of the message. **Fields will vary depending on message type.**
 */
export type ThreadMessageBody = {
    /**
     * The type of message
     */
    type: ThreadMessageBody.type;
    /**
     * The actual message text. **Only present for `text` message type**
     */
    body?: string;
    /**
     * Whether the message is only visible to moderators. **Only present for `text` message type**
     */
    private?: boolean;
    /**
     * The ID of the message being replied to by this message. **Only present for `text` message type**
     */
    replying_to?: string | null;
    /**
     * The old status of the project. **Only present for `status_change` message type**
     */
    old_status?: ThreadMessageBody.old_status;
    /**
     * The new status of the project. **Only present for `status_change` message type**
     */
    new_status?: ThreadMessageBody.new_status;
};

export namespace ThreadMessageBody {

    /**
     * The type of message
     */
    export enum type {
        STATUS_CHANGE = 'status_change',
        TEXT = 'text',
        THREAD_CLOSURE = 'thread_closure',
        DELETED = 'deleted',
    }

    /**
     * The old status of the project. **Only present for `status_change` message type**
     */
    export enum old_status {
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
     * The new status of the project. **Only present for `status_change` message type**
     */
    export enum new_status {
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


}
