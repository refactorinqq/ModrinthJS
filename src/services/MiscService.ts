/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ForgeUpdates } from '../models/ForgeUpdates';
import type { Statistics } from '../models/Statistics';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MiscService {

    /**
     * Forge Updates JSON file
     * If you're a Forge mod developer, your Modrinth mods have an automatically generated `updates.json` using the
 * [Forge Update Checker](https://docs.minecraftforge.net/en/latest/misc/updatechecker/).
 *
 * The only setup is to insert the URL into the `[[mods]]` section of your `mods.toml` file as such:
 *
 * ```toml
 * [[mods]]
 * # the other stuff here - ID, version, display name, etc.
 * updateJSONURL = "https://api.modrinth.com/updates/{slug|ID}/forge_updates.json"
 * ```
 *
 * Replace `{slug|id}` with the slug or ID of your project.
 *
 * Modrinth will handle the rest! When you update your mod, Forge will notify your users that their copy of your mod is out of date.
 *
 * Make sure that the version format you use for your Modrinth releases is the same as the version format you use in your `mods.toml`.
 * If you use a format such as `1.2.3-forge` or `1.2.3+1.19` with your Modrinth releases but your `mods.toml` only has `1.2.3`,
 * the update checker may not function properly.
 * 
     * @param idSlug The ID or slug of the project
     * @returns ForgeUpdates Expected response to a valid request
     * @throws ApiError
     */
    public static forgeUpdates(
idSlug: string,
): CancelablePromise<ForgeUpdates> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/updates/{id|slug}/forge_updates.json',
            path: {
                'id|slug': idSlug,
            },
            errors: {
                400: `Invalid request`,
            },
        });
    }

    /**
     * Various statistics about this Modrinth instance
     * @returns Statistics Expected response to a valid request
     * @throws ApiError
     */
    public static statistics(): CancelablePromise<Statistics> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/statistics',
        });
    }

}
