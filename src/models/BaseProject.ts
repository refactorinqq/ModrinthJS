/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BaseProject = {
    /**
     * The slug of a project, used for vanity URLs. Regex: ```^[\w!@$()`.+,"\-']{3,64}$```
     */
    slug?: string;
    /**
     * The title or name of the project
     */
    title?: string;
    /**
     * A short description of the project
     */
    description?: string;
    /**
     * A list of the categories that the project has
     */
    categories?: Array<string>;
    /**
     * The client side support of the project
     */
    client_side?: BaseProject.client_side;
    /**
     * The server side support of the project
     */
    server_side?: BaseProject.server_side;
};

export namespace BaseProject {

    /**
     * The client side support of the project
     */
    export enum client_side {
        REQUIRED = 'required',
        OPTIONAL = 'optional',
        UNSUPPORTED = 'unsupported',
    }

    /**
     * The server side support of the project
     */
    export enum server_side {
        REQUIRED = 'required',
        OPTIONAL = 'optional',
        UNSUPPORTED = 'unsupported',
    }


}
