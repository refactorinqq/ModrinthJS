"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiscService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class MiscService {
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
    static forgeUpdates(idSlug) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static statistics() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/statistics',
        });
    }
}
exports.MiscService = MiscService;
