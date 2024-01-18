***ATTENTION: This is obviously not an official package; I am not affiliated with neither Rinth, Inc. nor the Modrinth Team.***

<h1 align="center">Welcome to ModrinthJS 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://modrinthjs.surge.sh" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/refactorinqq/ModrinthJS/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" target="_blank">
    <img alt="License: GNU GPL v3.0" src="https://img.shields.io/github/license/refactorinqq/ModrinthJS" />
  </a>
</p>

> A type safe Modrinth implementation.

### 🏠 [Homepage](https://github.com/refactorinqq/ModrinthJS#readme)
### 📘 [Documentation](https://modrinthjs.surge.sh)

## Install

```sh
npm install modrinthjs
# or
yarn add modrinthjs
```

## Basic Usage

```js
import { ProjectsService } from 'modrinthjs'

async function main() {
    const project = await (await ProjectsService.searchProjects("Fabric API")).hits[0]

    console.log("Title: " + project.title)
    console.log("Description: " + project.description)
    console.log("Categories: " + project.categories?.map((cat) => cat.toUpperCase()))
    console.log("Downloads: " + format(project.downloads))
    console.log("Followers: " + format(project.follows))
}

function format(num) {
    return Intl.NumberFormat('en-US', {
        notation: "compact",
        maximumFractionDigits: 1
    }).format(num);
}

main()
```

```
[~] $ node example.js
Title: Fabric API
Description: Lightweight and modular API providing common hooks and intercompatibility measures utilized by mods using the Fabric toolchain.
Categories: FABRIC,LIBRARY
Downloads: 5.8M
Followers: 7.8K
[~] $
```

## Author

👤 **refactoring**

* Github: [@refactorinqq](https://github.com/refactorinqq)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/refactorinqq/ModrinthJS/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [refactoring](https://github.com/refactorinqq).<br />
This project is [GNU GPL v3.0](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_