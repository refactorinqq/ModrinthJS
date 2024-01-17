/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Project } from './Project';
import type { Version } from './Version';

export type ProjectDependencyList = {
    /**
     * Projects that the project depends upon
     */
    projects?: Array<Project>;
    /**
     * Versions that the project depends upon
     */
    versions?: Array<Version>;
};
