![npm](https://img.shields.io/npm/v/fluxgrid?style=flat-square) ![npm](https://img.shields.io/npm/dt/fluxgrid?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/fluxgrid?style=flat-square) <sup>(with debug)</sup>

# ![Fluxgrid](assets/imgs/fluxgrid.png)

_Yet another responsive utility-based CSS grid customisable with Sass._

## Install

```bash
npm i fluxgrid
```

If you'd like to [change the default config](#b-with-a-custom-config), make sure to install Sass as a peer dependency:

```bash
npm i sass@^1.26.10
```

## Default config

- Browser support: [browserslist](https://github.com/browserslist/browserslist) _defaults_ (IE 11 safe)
- Columns: `12`
- Gutters width: `1rem`
- Nestable: Yes, flushed with parent
- Direction: Row
- Breakpoints:

|            | Extra small | Small   | Medium  | Large         | Extra large         |
| ---------- | ----------- | ------- | ------- | ------------- | ------------------- |
| Device     | Phone       | Tablet  | Desktop | Large desktop | Extra large desktop |
| Breakpoint | > 0         | ≥ 425px | ≥ 768px | ≥ 1024px      | ≥ 1366px            |
| Prefix     |             | `sm:`   | `md:`   | `lg:`         | `xl:`               |

## Syntax

```html
<div class="container container-modifier">
  <div class="grid *grid-modifier">
    <div class="cell *cell-modifier"></div>
  </div>
</div>
```

`*` Responsive prefix: `sm:|md:|lg:|xl:`

## Options

Head over to the [demo page](https://johanmouchet.github.io/fluxgrid/).

## Getting Started

Choose your preferred way:

### A. Quick start, with the default config

- [Install](#install) Fluxgrid
- Import it to your build environment, either with:
  - HTML: `<link rel="stylesheet" type="text/css" href="node_modules/fluxgrid/dist/fluxgrid.css"/>`
  - JS: `import "fluxgrid/dist/fluxgrid.css";`
- Optionally (not recommended in production) import `fluxgrid-debug.css` the same way

### B. With a custom config

- [Install](#install) Fluxgrid, and it's peer dependency
- Overwrite the default config by redefine any of the `!default` Sass variables from `src/_settings.scss`:
  ```scss
  $fluxgrid-division;
  $fluxgrid-gutter;
  $fluxgrid-gutter-lg;
  $fluxgrid-outside-margin;
  $fluxgrid-breakpoints;
  ```
- Import it to your build environment, either with:
  - Sass: `@use "fluxgrid/src/fluxgrid";`\*
  - JS: `import "fluxgrid/src/fluxgrid.scss";`
- Optionally (not recommended in production) import `fluxgrid-debug.scss` the same way
- Run these through your build pipeline. It is advised to Autoprefix and minify them

\*: if using legacy bundlers like Webpack or others, prefix the import with [`~`](https://webpack.js.org/loaders/css-loader/#url), or `node_modules/`

# Development

## npm Scripts

In the project directory, you can `npm run`:

- `dev`: Starts up a development server with hot module replacement
- `build`: Build Fluxgrid and Fluxgrid Debug, ready for deployment
- `docs`: Build the documentation
- `lint`: Runs the [stylelint](https://stylelint.io/) linter, _a mighty, modern linter that helps you avoid errors and enforce conventions in your styles_
- `format`: Runs stylelint with the `--fix` option, as well as [Prettier](https://prettier.io/) with the `--write` option to automatically fix problems
- `deploy`: Run format, build and docs scripts

## Deployment

1. Update `CHANGELOG.md` following the [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format
2. Run `npm run deploy`
3. Update `package.json` and `package-lock.json` using [semver](https://semver.org/): `"version": "<semver>"`
4. Once merged to `master`, tag: `git tag <semver>`
5. Publish to npm: `npm publish`

## Contribution

Contribution is welcomed, feel free to raise an issue or PR.
