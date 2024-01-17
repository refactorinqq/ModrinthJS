/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreatableProjectGalleryItem = {
    /**
     * The name of the multipart item where the gallery media is located
     */
    item?: string;
    /**
     * Whether the image is featured in the gallery
     */
    featured?: boolean;
    /**
     * The title of the gallery image
     */
    title?: string | null;
    /**
     * The description of the gallery image
     */
    description?: string | null;
    /**
     * The order of the gallery image. Gallery images are sorted by this field and then alphabetically by title.
     */
    ordering?: number;
};
