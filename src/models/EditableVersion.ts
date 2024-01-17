/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaseVersion } from './BaseVersion';
import type { EditableFileType } from './EditableFileType';

export type EditableVersion = (BaseVersion & {
/**
 * The hash format and the hash of the new primary file
 */
primary_file?: Array<string>;
/**
 * A list of file_types to edit
 */
file_types?: Array<EditableFileType>;
});
