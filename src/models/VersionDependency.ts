/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type VersionDependency = {
    /**
     * The ID of the version that this version depends on
     */
    version_id?: string | null;
    /**
     * The ID of the project that this version depends on
     */
    project_id?: string | null;
    /**
     * The file name of the dependency, mostly used for showing external dependencies on modpacks
     */
    file_name?: string | null;
    /**
     * The type of dependency that this version has
     */
    dependency_type: VersionDependency.dependency_type;
};

export namespace VersionDependency {

    /**
     * The type of dependency that this version has
     */
    export enum dependency_type {
        REQUIRED = 'required',
        OPTIONAL = 'optional',
        INCOMPATIBLE = 'incompatible',
        EMBEDDED = 'embedded',
    }


}
