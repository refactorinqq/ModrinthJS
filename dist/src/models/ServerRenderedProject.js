"use strict";
/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerRenderedProject = void 0;
var ServerRenderedProject;
(function (ServerRenderedProject) {
    /**
     * The project type of the project
     */
    let project_type;
    (function (project_type) {
        project_type["MOD"] = "mod";
        project_type["MODPACK"] = "modpack";
        project_type["RESOURCEPACK"] = "resourcepack";
        project_type["SHADER"] = "shader";
    })(project_type = ServerRenderedProject.project_type || (ServerRenderedProject.project_type = {}));
    let monetization_status;
    (function (monetization_status) {
        monetization_status["MONETIZED"] = "monetized";
        monetization_status["DEMONETIZED"] = "demonetized";
        monetization_status["FORCE_DEMONETIZED"] = "force-demonetized";
    })(monetization_status = ServerRenderedProject.monetization_status || (ServerRenderedProject.monetization_status = {}));
})(ServerRenderedProject || (exports.ServerRenderedProject = ServerRenderedProject = {}));
