import { ProjectResult, ProjectsService } from './src/index'

async function main() {
    const facets = [
        ['categories:forge'],
        ['versions:1.17.1'],
        ['project_type:mod'],
        ['license:mit'],
    ];

    const project: ProjectResult  = await (await ProjectsService.searchProjects("Any", JSON.stringify(facets))).hits[0] as ProjectResult

    console.log("Title: " + project.title)
    console.log("Description: " + project.description)
    console.log("Categories: " + project.categories?.map((mod: any) => mod.toUpperCase()))
    console.log("Downloads: " + format(project.downloads))
    console.log("Followers: " + format(project.follows))
}

function format(num: number) {
    return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(num);
}

main()