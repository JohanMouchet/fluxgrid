# Fluxgrid

_Responsive and customisable utility-based CSS grid built with Sass._

## Install

```
npm i fluxgrid --save
```

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

```html
<div class="container container--modifier">
  <div class="grid grid--modifier-*">
    <div class="cell cell--modifier-*"></div>
  </div>
</div>
```

Responsive: \*`@xs|@sm|@md|@lg|@xl`

## Options

Head over the [demo page](https://johanmouchet.github.io/fluxgrid/index.html).

## Getting Started

Choose your preferred way:

### A. With the default config

- Link the pre-compiled files to your document's `<head>`:

  - [`fluxgrid.min.css`](https://github.com/JohanMouchet/fluxgrid/blob/master/assets/dist/css/fluxgrid.min.css)

    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="node_modules/fluxgrid/assets/dist/css/fluxgrid/fluxgrid.min.css"
    />
    ```

  - [`fluxgrid-debug.min.css`](https://github.com/JohanMouchet/fluxgrid/blob/master/assets/dist/css/fluxgrid-debug.min.css) (optional, not recommended in production)

    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="node_modules/fluxgrid/assets/dist/css/fluxgrid/fluxgrid-debug.min.css"
    />
    ```

### B. [Recommended] With a custom config - within your own build environment (Webpack / Gulp / Grunt / any)

- To overwrite the default config, redefine any of the `!default` Sass variables from `_settings.scss`:
  ```scss
  $fluxgrid-namespace
  $fluxgrid-division
  $fluxgrid-gutter
  $fluxgrid-outside-margin
  $fluxgrid-breakpoints
  ```
- Import Fluxgrid: `@import "node_modules/fluxgrid/assets/src/scss/fluxgrid/fluxgrid.scss"`
- Optionally (not recommended in production) import `fluxgrid-debug.scss` the same way
- Run these through your Sass pipeline. It is advised to Autoprefix and minify them
- Link the output files to your document's `<head>` as shown above

### C. With a custom config - with the provided build tool

- Clone the repo
- Install the dependencies: `$ npm i`
- Customise the Sass variables from `_settings.scss` to your liking:
  ```scss
  $fluxgrid-namespace
  $fluxgrid-division
  $fluxgrid-gutter
  $fluxgrid-outside-margin
  $fluxgrid-breakpoints
  ```
- To build the grid, run: `$ npx gulp prod`, with the optional flag `--debug`
- Link the output files to your document's `<head>` as shown above
