import { ProjectsService } from './src/index'

async function main() {
    const project = await ProjectsService.getProject("P7dR8mSH")

    console.log("Title: " + project.title)
    console.log("Description: " + project.description)
    console.log("Categories: " + project.categories?.map((mod) => mod.toUpperCase()))
    console.log("Downloads: " + format(project.downloads))
    console.log("Followers: " + format(project.followers))
}

function format(num: number) {
    return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(num);
}

main()