/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseProject } from './BaseProject';

export type ServerRenderedProject = (BaseProject & {
/**
 * The project type of the project
 */
project_type: ServerRenderedProject.project_type;
/**
 * The total number of downloads of the project
 */
downloads: number;
/**
 * The URL of the project's icon
 */
icon_url?: string | null;
/**
 * The RGB color of the project, automatically generated from the project icon
 */
color?: number | null;
/**
 * The ID of the moderation thread associated with this project
 */
thread_id?: string;
monetization_status?: ServerRenderedProject.monetization_status;
});

export namespace ServerRenderedProject {

    /**
     * The project type of the project
     */
    export enum project_type {
        MOD = 'mod',
        MODPACK = 'modpack',
        RESOURCEPACK = 'resourcepack',
        SHADER = 'shader',
    }

    export enum monetization_status {
        MONETIZED = 'monetized',
        DEMONETIZED = 'demonetized',
        FORCE_DEMONETIZED = 'force-demonetized',
    }


}
