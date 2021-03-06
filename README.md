[![Build Status](https://travis-ci.org/noracast/podcast-freaks.svg?branch=master)](https://travis-ci.org/noracast/podcast-freaks)


# Getting started

## Local development

```
yarn
yarn prebuild # Download assets into /static/downloads
yarn dev
```

**Use 'yarn' because it will cause problem on travis ci when you use 'npm'.**

Refs:
- https://travis-ci.org/noracast/podcast-freaks/builds/416706653#L2821
- https://github.com/nuxt/nuxt.js/issues/3039#issuecomment-396904887

# Deployment from local

```sh
yarn build && yarn deploy
```
or if you have already execute 'prebuild'

```sh
yarn build:skip && yarn deploy
```

or if you want to push directly to Netlify with netlify-cli

```sh
yarn build:skip && yarn deploy:netlify
```


# Daily deployment

This project is hosted on [Travis CI](https://travis-ci.org/developersjp/podcast-freaks). With its 'Cron Jobs', all rss seems to be updated on travis and pushed to 'netlify' branch of this project.

Don't use `yarn deploy` (push-dir) on TravisCI. It will cause `Authentication failed`.


# Forms

[!] You need to align items in form with `static/form.html`

Ref: https://qiita.com/hiropy0123/items/2e8d14ea66b78ab64847
