![npm](https://img.shields.io/npm/v/fluxgrid?style=flat-square) ![npm](https://img.shields.io/npm/dt/fluxgrid?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/fluxgrid?style=flat-square) <sup>(with debug)</sup>

# ![Fluxgrid](assets/img/fluxgrid.png)

_Yet another responsive utility-based CSS grid customisable with Sass._

## Install

```
npm i fluxgrid
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
| Suffix     | `@xs`       | `@sm`   | `@md`   | `@lg`         | `@xl`               |

## Syntax

```html
<div class="container container--modifier">
  <div class="grid grid--modifier-*">
    <div class="cell cell--modifier-*"></div>
  </div>
</div>
```

Responsive: \*`@xs|@sm|@md|@lg|@xl`

## Options

Head over to the [doc page](https://johanmouchet.github.io/fluxgrid/index.html).

## Getting Started

Choose your preferred way:

### A. Quick start, with the default config

- [Install](#install) Fluxgrid
- Import it to your build environment, either with:
  - Sass: `@import "~fluxgrid/dist/fluxgrid";`\*
  - JS: `import "fluxgrid/dist/fluxgrid.css";`
  - HTML: `<link rel="stylesheet" type="text/css" href="node_modules/fluxgrid/dist/fluxgrid.css"/>`
- Optionally (not recommended in production) import `fluxgrid-debug.css` the same way

### B. With a custom config

- [Install](#install) Fluxgrid
- Overwrite the default config by redefine any of the `!default` Sass variables from `_settings.scss`:
  ```scss
  $fluxgrid-division;
  $fluxgrid-gutter;
  $fluxgrid-gutter-lg;
  $fluxgrid-outside-margin;
  $fluxgrid-breakpoints;
  ```
- Import it to your build environment, either with:
  - Sass: `@import "~fluxgrid/src/fluxgrid";`\*
  - JS: `import "fluxgrid/src/fluxgrid.scss";`
- Optionally (not recommended in production) import `fluxgrid-debug.scss` the same way
- Run these through your build pipeline. It is advised to Autoprefix and minify them

\*: `~` is a Webpack [feature](https://webpack.js.org/loaders/css-loader/#url), replace with `node_modules/` if needed

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

1. Run `npm run deploy`
2. Update `package.json` and `package-lock.json` using [semver](https://semver.org/): `"version": "<semver>"`
3. Once merged / commited to `master`, tag: `git tag <semver>`
4. Publish to npm: `npm publish`

## Contribution

Contribution is welcomed, feel free to raise an issue or PR.
