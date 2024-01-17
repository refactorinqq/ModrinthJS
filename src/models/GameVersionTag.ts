/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GameVersionTag = {
    /**
     * The name/number of the game version
     */
    version: string;
    /**
     * The type of the game version
     */
    version_type: GameVersionTag.version_type;
    /**
     * The date of the game version release
     */
    date: string;
    /**
     * Whether or not this is a major version, used for Featured Versions
     */
    major: boolean;
};

export namespace GameVersionTag {

    /**
     * The type of the game version
     */
    export enum version_type {
        RELEASE = 'release',
        SNAPSHOT = 'snapshot',
        ALPHA = 'alpha',
        BETA = 'beta',
    }


}
