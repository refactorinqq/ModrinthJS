/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatableProjectGalleryItem } from './CreatableProjectGalleryItem';
import type { EditableVersion } from './EditableVersion';
import type { ModifiableProject } from './ModifiableProject';

export type CreatableProject = (ModifiableProject & {
project_type: CreatableProject.project_type;
/**
 * A list of initial versions to upload with the created project. Deprecated - please upload version files after initial upload.
 * @deprecated
 */
initial_versions?: Array<EditableVersion>;
/**
 * Whether the project should be saved as a draft instead of being sent to moderation for review. Deprecated - please always mark this as true.
 * @deprecated
 */
is_draft?: boolean;
/**
 * Gallery images to be uploaded with the created project. Deprecated - please upload gallery images after initial upload.
 * @deprecated
 */
gallery_items?: Array<CreatableProjectGalleryItem>;
});

export namespace CreatableProject {

    export enum project_type {
        MOD = 'mod',
        MODPACK = 'modpack',
    }


}
