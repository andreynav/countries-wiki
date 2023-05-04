<div align="center">

![GitHub repo size](https://img.shields.io/github/repo-size/andreynav/countries-wiki?style=for-the-badge)
![GitHub deployments](https://img.shields.io/github/deployments/andreynav/countries-wiki/Production%20%E2%80%93%20countries-wiki-prod?label=vercel%20deployment&style=for-the-badge)
![Website](https://img.shields.io/website?label=countries%20wiki&style=for-the-badge&url=https%3A%2F%2Fcountries-wiki-prod.vercel.app%2F)

</div>

# General Notes

The project is a web application with information about countries all around the world. You can select an available region of the world or search for the specific country directly. The project is made using React, React Router and Styled components. 
The project use [REST Countries API](https://restcountries.com/).
The project based on [Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). 


## Demo

You can open and use the app by [countries-wiki app link](https://countries-wiki-prod.vercel.app/).

## Project structure

The project has multilayer structure:

- `public` - used to keep static content for builds
- `api` - used to keep API calls functionality
- `assets` - used to keep static content
- `components` - used to keep react components
- `hooks` - used to keep hooks
- `styles` - used to keep styles
- `types` - used to keep TypeScript common types
- `utils` - used to keep utils for helping

## Dependencies

The project has the next dependencies in the [package.json](package.json) file.

<div align="center">

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/andreynav/countries-wiki/react?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/andreynav/countries-wiki/axios?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/andreynav/countries-wiki/react-router-dom?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/andreynav/countries-wiki/react-icons?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/andreynav/countries-wiki/react-select?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/andreynav/countries-wiki/styled-components?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/andreynav/countries-wiki/typescript?style=for-the-badge)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/andreynav/countries-wiki/intro.js-react?style=for-the-badge)

</div>

## Installation

1. Clone project to your PC by the following command:

```console
  git clone https://github.com/andreynav/countries-wiki.git
```

2. Open the root directory and enter the following command:

```console
  yarn
```

3. In the root directory create `.env` file and add inside it a row `PORT=3002` (or any desired port).


## Running project

To run project, open the root directory and enter the following command:

```console
  yarn start
```

The command runs the app in the development mode.
Open [http://localhost:3002](http://localhost:3002) to view it in your browser.

## License

The project is open source software provided under the [Apache License 2.0](LICENSE.md).