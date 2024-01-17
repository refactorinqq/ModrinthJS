/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProjectResult } from './ProjectResult';

export type SearchResults = {
    /**
     * The list of results
     */
    hits: Array<ProjectResult>;
    /**
     * The number of results that were skipped by the query
     */
    offset: number;
    /**
     * The number of results that were returned by the query
     */
    limit: number;
    /**
     * The total number of results that match the query
     */
    total_hits: number;
};
