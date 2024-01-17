/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Schedule = {
    time: string;
    /**
     * The requested status when scheduling the project for release
     */
    requested_status: Schedule.requested_status;
};

export namespace Schedule {

    /**
     * The requested status when scheduling the project for release
     */
    export enum requested_status {
        APPROVED = 'approved',
        ARCHIVED = 'archived',
        UNLISTED = 'unlisted',
        PRIVATE = 'private',
        DRAFT = 'draft',
    }


}
