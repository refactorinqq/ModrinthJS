/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProjectBody } from '../models/CreateProjectBody';
import type { EditableProject } from '../models/EditableProject';
import type { PatchProjectsBody } from '../models/PatchProjectsBody';
import type { Project } from '../models/Project';
import type { ProjectDependencyList } from '../models/ProjectDependencyList';
import type { ProjectIdentifier } from '../models/ProjectIdentifier';
import type { Schedule } from '../models/Schedule';
import type { SearchResults } from '../models/SearchResults';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProjectsService {

    /**
     * Search projects
     * @param query The query to search for
     * @param facets Facets are an essential concept for understanding how to filter out results.
 *
 * These are the most commonly used facet types:
 * - `project_type`
 * - `categories` (loaders are lumped in with categories in search)
 * - `versions`
 * - `client_side`
 * - `server_side`
 * - `open_source`
 *
 * Several others are also available for use, though these should not be used outside very specific use cases.
 * - `title`
 * - `author`
 * - `follows`
 * - `project_id`
 * - `license`
 * - `downloads`
 * - `color`
 * - `created_timestamp`
 * - `modified_timestamp`
 *
 * In order to then use these facets, you need a value to filter by, as well as an operation to perform on this value.
 * The most common operation is `:` (same as `=`), though you can also use `!=`, `>=`, `>`, `<=`, and `<`.
 * Join together the type, operation, and value, and you've got your string.
 * ```
 * {type} {operation} {value}
 * ```
 *
 * Examples:
 * ```
 * categories = adventure
 * versions != 1.20.1
 * downloads <= 100
 * ```
 *
 * You then join these strings together in arrays to signal `AND` and `OR` operators.
 *
 * ##### OR
 * All elements in a single array are considered to be joined by OR statements.
 * For example, the search `[["versions:1.16.5", "versions:1.17.1"]]` translates to `Projects that support 1.16.5 OR 1.17.1`.
 *
 * ##### AND
 * Separate arrays are considered to be joined by AND statements.
 * For example, the search `[["versions:1.16.5"], ["project_type:modpack"]]` translates to `Projects that support 1.16.5 AND are modpacks`.
 * 
     * @param index The sorting method used for sorting search results
     * @param offset The offset into the search. Skips this number of results
     * @param limit The number of results returned by the search
     * @returns SearchResults Expected response to a valid request
     * @throws ApiError
     */
    public static searchProjects(
    query?: string,
    facets?: string,
    index: 'relevance' | 'downloads' | 'follows' | 'newest' | 'updated' = 'relevance',
    offset?: number,
    limit: number = 10,
  ): CancelablePromise<SearchResults> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/search',
      query: {
        'query': query,
        'facets': facets,
        'index': index,
        'offset': offset,
        'limit': limit,
      },
      errors: {
        400: 'Request was invalid; See given error!'
      },
    });
  }
    /**
     * Get a project
     * @param idSlug The ID or slug of the project
     * @returns Project Expected response to a valid request
     * @throws ApiError
     */
    public static getProject(
idSlug: string,
): CancelablePromise<Project> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{id|slug}',
            path: {
                'id|slug': idSlug,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Modify a project
     * @param idSlug The ID or slug of the project
     * @param requestBody Modified project fields
     * @returns void 
     * @throws ApiError
     */
    public static modifyProject(
idSlug: string,
requestBody?: EditableProject,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/project/{id|slug}',
            path: {
                'id|slug': idSlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Delete a project
     * @param idSlug The ID or slug of the project
     * @returns void 
     * @throws ApiError
     */
    public static deleteProject(
idSlug: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/project/{id|slug}',
            path: {
                'id|slug': idSlug,
            },
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Get multiple projects
     * @param ids The IDs and/or slugs of the projects
     * @returns Project Expected response to a valid request
     * @throws ApiError
     */
    public static getProjects(
ids: string,
): CancelablePromise<Array<Project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects',
            query: {
                'ids': ids,
            },
        });
    }

    /**
     * Bulk-edit multiple projects
     * @param ids The IDs and/or slugs of the projects
     * @param requestBody Fields to edit on all projects specified
     * @returns void 
     * @throws ApiError
     */
    public static patchProjects(
ids: string,
requestBody?: PatchProjectsBody,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/projects',
            query: {
                'ids': ids,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Get a list of random projects
     * @param count The number of random projects to return
     * @returns Project Expected response to a valid request
     * @throws ApiError
     */
    public static randomProjects(
count: number,
): CancelablePromise<Array<Project>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/projects_random',
            query: {
                'count': count,
            },
            errors: {
                400: `Request was invalid, see given error`,
            },
        });
    }

    /**
     * Create a project
     * @param formData New project
     * @returns Project Expected response to a valid request
     * @throws ApiError
     */
    public static createProject(
formData?: CreateProjectBody,
): CancelablePromise<Project> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Change project's icon
     * The new icon may be up to 256KiB in size.
     * @param idSlug The ID or slug of the project
     * @param ext Image extension
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static changeProjectIcon(
idSlug: string,
ext: 'png' | 'jpg' | 'jpeg' | 'bmp' | 'gif' | 'webp' | 'svg' | 'svgz' | 'rgb',
requestBody?: Blob,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/project/{id|slug}/icon',
            path: {
                'id|slug': idSlug,
            },
            query: {
                'ext': ext,
            },
            body: requestBody,
            mediaType: 'image/png',
            errors: {
                400: `Request was invalid, see given error`,
            },
        });
    }

    /**
     * Delete project's icon
     * @param idSlug The ID or slug of the project
     * @returns void 
     * @throws ApiError
     */
    public static deleteProjectIcon(
idSlug: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/project/{id|slug}/icon',
            path: {
                'id|slug': idSlug,
            },
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Check project slug/ID validity
     * @param idSlug The ID or slug of the project
     * @returns ProjectIdentifier Expected response to a valid request
     * @throws ApiError
     */
    public static checkProjectValidity(
idSlug: string,
): CancelablePromise<ProjectIdentifier> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{id|slug}/check',
            path: {
                'id|slug': idSlug,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Add a gallery image
     * Modrinth allows you to upload files of up to 5MiB to a project's gallery.
     * @param idSlug The ID or slug of the project
     * @param ext Image extension
     * @param featured Whether an image is featured
     * @param title Title of the image
     * @param description Description of the image
     * @param ordering Ordering of the image
     * @param requestBody 
     * @returns void 
     * @throws ApiError
     */
    public static addGalleryImage(
idSlug: string,
ext: 'png' | 'jpg' | 'jpeg' | 'bmp' | 'gif' | 'webp' | 'svg' | 'svgz' | 'rgb',
featured: boolean,
title?: string,
description?: string,
ordering?: number,
requestBody?: Blob,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project/{id|slug}/gallery',
            path: {
                'id|slug': idSlug,
            },
            query: {
                'ext': ext,
                'featured': featured,
                'title': title,
                'description': description,
                'ordering': ordering,
            },
            body: requestBody,
            mediaType: 'image/png',
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Modify a gallery image
     * @param idSlug The ID or slug of the project
     * @param url URL link of the image to modify
     * @param featured Whether the image is featured
     * @param title New title of the image
     * @param description New description of the image
     * @param ordering New ordering of the image
     * @returns void 
     * @throws ApiError
     */
    public static modifyGalleryImage(
idSlug: string,
url: string,
featured?: boolean,
title?: string,
description?: string,
ordering?: number,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/project/{id|slug}/gallery',
            path: {
                'id|slug': idSlug,
            },
            query: {
                'url': url,
                'featured': featured,
                'title': title,
                'description': description,
                'ordering': ordering,
            },
            errors: {
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Delete a gallery image
     * @param idSlug The ID or slug of the project
     * @param url URL link of the image to delete
     * @returns void 
     * @throws ApiError
     */
    public static deleteGalleryImage(
idSlug: string,
url: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/project/{id|slug}/gallery',
            path: {
                'id|slug': idSlug,
            },
            query: {
                'url': url,
            },
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Get all of a project's dependencies
     * @param idSlug The ID or slug of the project
     * @returns ProjectDependencyList Expected response to a valid request
     * @throws ApiError
     */
    public static getDependencies(
idSlug: string,
): CancelablePromise<ProjectDependencyList> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/project/{id|slug}/dependencies',
            path: {
                'id|slug': idSlug,
            },
            errors: {
                404: `The requested item(s) were not found or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Follow a project
     * @param idSlug The ID or slug of the project
     * @returns void 
     * @throws ApiError
     */
    public static followProject(
idSlug: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project/{id|slug}/follow',
            path: {
                'id|slug': idSlug,
            },
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Unfollow a project
     * @param idSlug The ID or slug of the project
     * @returns void 
     * @throws ApiError
     */
    public static unfollowProject(
idSlug: string,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/project/{id|slug}/follow',
            path: {
                'id|slug': idSlug,
            },
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

    /**
     * Schedule a project
     * @param idSlug The ID or slug of the project
     * @param requestBody Information about date and requested status
     * @returns void 
     * @throws ApiError
     */
    public static scheduleProject(
idSlug: string,
requestBody?: Schedule,
): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/project/{id|slug}/schedule',
            path: {
                'id|slug': idSlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Request was invalid, see given error`,
                401: `Incorrect token scopes or no authorization to access the requested item(s)`,
            },
        });
    }

}
