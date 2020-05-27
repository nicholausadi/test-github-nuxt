![CI](https://github.com/nicholausadi/test-github-nuxt/workflows/CI/badge.svg) [![codecov](https://codecov.io/gh/nicholausadi/test-github-nuxt/branch/master/graph/badge.svg)](https://codecov.io/gh/nicholausadi/test-github-nuxt) [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=nicholausadi_test-github-nuxt&metric=alert_status)](https://sonarcloud.io/dashboard?id=nicholausadi_test-github-nuxt) [![Coverage](https://sonarcloud.io/api/project_badges/measure?project=nicholausadi_test-github-nuxt&metric=coverage)](https://sonarcloud.io/dashboard?id=nicholausadi_test-github-nuxt) [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=nicholausadi_test-github-nuxt&metric=bugs)](https://sonarcloud.io/dashboard?id=nicholausadi_test-github-nuxt) [![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=nicholausadi_test-github-nuxt&metric=ncloc)](https://sonarcloud.io/dashboard?id=nicholausadi_test-github-nuxt) [![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=nicholausadi_test-github-nuxt&metric=sqale_rating)](https://sonarcloud.io/dashboard?id=nicholausadi_test-github-nuxt) [![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=nicholausadi_test-github-nuxt&metric=security_rating)](https://sonarcloud.io/dashboard?id=nicholausadi_test-github-nuxt) [![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=nicholausadi_test-github-nuxt&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=nicholausadi_test-github-nuxt)

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
- [x] Lint staged files (pre-commit lint checks)
- [x] Semantic Pull Request https://probot.github.io/apps/semantic-pull-requests/
- [x] Conventional Commit and PR message https://www.conventionalcommits.org/en/v1.0.0/
- [x] WIP checks https://github.com/marketplace/wip
- [x] Code Analysis (SonarCloud)
  - [x] Duplicated code
  - [x] Cyclomatic complexity
  - [x] Security and Vulnarabilities
  - [x] Afferent and efferent coupling
  - [x] Number of warnings
  - [x] Unused code

## Test

- [x] Unit Testing
- [ ] UI Testing
- [ ] [Placeholder] Smoke?
- [ ] [Placeholder] Integration?
- [ ] [Placeholder] Acceptance?

## Code Coverage

- [x] Upload code coverage (Codecov)
- [x] Upload code coverage (SonarCloud)

## Build

- [x] Docker

## Deploy

- [x] Cloud Run

## Canary Release

- [ ] Github Actions Delay Job
