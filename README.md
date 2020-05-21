[![codecov](https://codecov.io/gh/nicholausadi/test-github-nuxt/branch/master/graph/badge.svg)](https://codecov.io/gh/nicholausadi/test-github-nuxt) ![CI](https://github.com/nicholausadi/test-github-nuxt/workflows/CI/badge.svg)

# test-github-nuxt

> My transcendent Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Project CI/CD

## Commit

- [x] Linter/Code style (ESLint)
- [x] Stylelint
- [x] Prettier
- [ ] Lint staged files
- [x] Semantic Pull Request https://probot.github.io/apps/semantic-pull-requests/
- [x] WIP checks https://github.com/marketplace/wip
- [x] Code Analysis (SonarQube)
  - [x] Duplicated code
  - [x] Cyclomatic complexity
  - [x] Security and Vulnarabilities
  - [x] Afferent and efferent coupling
  - [x] Number of warnings
  - [x] Unused code

## Test

- [x] Unit Testing
- [ ] UI Testing
- [ ] Smoke?
- [ ] Integration?
- [ ] Acceptance?

## Code Coverage

- [x] Upload code coverage (Codecov)
- [x] Upload code coverage (SonarQube)

## Build

- [x] Docker

## Deploy

- [x] Cloud Run

## Canary Release

- [ ] Github Actions Delay Job
