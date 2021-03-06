# vip-vue-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, css extraction, vue-resource, vuex & vue-router, extended from [vue-template](https://github.com/vuejs-templates/webpack)

## Documentation

Common topics are discussed in the [docs](http://vuejs-templates.github.io/webpack). Make sure to read it!

## Usage

This is a project template for [vip-cli](https://github.com/vip-fe-sh/vip-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g vip-cli
$ vip init vipsr vip-project
$ cd vip-project
$ npm install
$ npm run dev
```

## Folder Structure

``` bash
.
├── build
│   ├── dev-server.js         # development server script
│   ├── webpack.base.conf.js  # shared base webpack config
│   ├── webpack.dev.conf.js   # development webpack config
│   ├── webpack.prod.conf.js  # production webpack config
│   └── ...
├── src
│   ├── app.js                # app entry file
│   ├── components            # ui components
│   │   ├── App
│   │   │   ├── index.html    # component template
│   │   │   └── index.js      # component script
│   │   └── ...
│   ├── vuex                  # vuex
│   │   └── ...
│   ├── router                # router
│   │   └── ...
│   ├── styles                # app styles
│   │   └── ...
│   └── utils                 # utils function
│       └── ...
├── static                    # pure static assets (directly copied)
├── dist                      # built files ready for deploy
├── page
│   ├── mock                  # mock data
│   └── index.html            # demo page
├── .babelrc                  # babel config
├── .eslintrc.js              # eslint config
└── package.json              # build scripts and dependencies
```

## What's Included

- `npm run dev`: first-in-class development experience.
  - Run webpack dev server
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS](https://github.com/mishoo/UglifyJS2).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - All static assets compiled with version hashes for efficient long-term caching, and a production `index.html` is auto-generated with proper URLs to these generated assets.

For a better understanding of how things work, consult the docs for respective projects listed. In particular, [Webpack](http://webpack.github.io/).

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `vip-cli`:

``` bash
vip init username/repo my-project
```
