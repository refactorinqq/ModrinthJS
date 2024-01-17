"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const modrinthjs_1 = require("modrinthjs");
function main() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const project = yield (yield modrinthjs_1.ProjectsService.searchProjects("Any")).hits[0];
        console.log("Title: " + project.title);
        console.log("Description: " + project.description);
        console.log("Categories: " + ((_a = project.categories) === null || _a === void 0 ? void 0 : _a.map((mod) => mod.toUpperCase())));
        console.log("Downloads: " + format(project.downloads));
        console.log("Followers: " + format(project.follows));
    });
}
function format(num) {
    return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(num);
}
main();
