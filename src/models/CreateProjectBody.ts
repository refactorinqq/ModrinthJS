/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatableProject } from './CreatableProject';

export type CreateProjectBody = {
    data: CreatableProject;
    /**
     * Project icon file
     */
    icon?: CreateProjectBody.icon;
};

export namespace CreateProjectBody {

    /**
     * Project icon file
     */
    export enum icon {
        _PNG = '*.png',
        _JPG = '*.jpg',
        _JPEG = '*.jpeg',
        _BMP = '*.bmp',
        _GIF = '*.gif',
        _WEBP = '*.webp',
        _SVG = '*.svg',
        _SVGZ = '*.svgz',
        _RGB = '*.rgb',
    }


}
