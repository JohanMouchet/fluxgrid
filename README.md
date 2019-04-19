# Flexbox Grid Sass

_Responsive and customisable utility-based CSS grid built with Sass._

## Default config

- Columns: `12`
- Gutters width: `1rem`
- Nestable: Yes
- Direction: Row
- Breakpoints:

|            | Extra small | Small   | Medium  | Large         | Extra large         |
| ---------- | ----------- | ------- | ------- | ------------- | ------------------- |
| Device     | Phone       | Tablet  | Desktop | Large desktop | Extra large desktop |
| Breakpoint | > 0         | ≥ 425px | ≥ 768px | ≥ 1024px      | ≥ 1366px            |
| Suffix     | `@xs`       | `@sm`   | `@md`   | `@lg`         | `@xl`               |

## Syntax

```
<div class="container container--modifier">
  <div class="grid grid--modifier-*">
    <div class="cell cell--modifier-*"></div>
  </div>
</div>
```

Responsive: \*`@xs|@sm|@md|@lg|@xl`

## Options

Head over the [demo page](https://johanmouchet.github.io/flexboxgrid-sass/index.html).

## Getting Started

Choose your preferred way:

### A. With the default config

- Link the files from `assets/dist/css/` to your document's `<head>`:
  - [`flexboxgrid.min.css`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/dist/css/flexboxgrid.min.css)
  - [`flexboxgrid-debug.min.css`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/dist/css/flexboxgrid-debug.min.css) (optional, not recommended in production)

```
<head>
  <link rel="stylesheet" type="text/css" href="flexboxgrid.min.css" >
  <link rel="stylesheet" type="text/css" href="flexboxgrid-debug.min.css" >
</head>
```

### B. Within a build environment (Gulp / Grunt / any)

- Add the files from `assets/src/flexboxgrid/` to your build environment:
  - [`_flexboxgrid-settings.scss`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/src/scss/_flexboxgrid-settings.scss)
  - [`flexboxgrid-debug.scss`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/src/scss/_flexboxgrid-debug.scss)
  - [`flexboxgrid.scss`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/src/scss/flexboxgrid.scss)
- Customise the grid variables from `_flexboxgrid-settings.scss` to your liking. It is recommended to override the `!default` ones in another file, but you can also edit them directly:
  - `$grid-division`
  - `$grid-gutter`
  - `$grid-breakpoints`
- Run `flexboxgrid.scss` and optionally `flexboxgrid-debug.scss` trough your build. It is advised to Autoprefix and minify them
- Link the output files to your document's `<head>`. `flexboxgrid-debug.scss` is not recommended in production

## Development

- Install the dependencies: `$ npm i`
- Use npx to run gulp: `$ npx gulp <option>`
- To list available tasks, try running: `$ npx gulp --tasks`

## TODO

- Comment on flexbox support & grid benefits: https://caniuse.com/#feat=flexbox
- Conditional @import debug
- Split media queries?
