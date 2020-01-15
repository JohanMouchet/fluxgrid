# Fluxgrid

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

The grid can be linked as a standalone file `1.9 kB (gzipped)` or as individual breakpoints files `3.7 kB (gzipped)`, which allows a slightly lighter download weight on mobile at no extra cost with HTTP/2.

Choose your preferred way:

### A. With the default config

- Link the files from `assets/dist/css/fluxgrid/` to your document's `<head>`:

  - [`fluxgrid.min.css`](https://github.com/JohanMouchet/fluxgrid/blob/master/assets/dist/css/fluxgrid.min.css)

    ```html
    <link rel="stylesheet" type="text/css" href="fluxgrid/fluxgrid.min.css" />
    ```

  - [`fluxgrid-debug.min.css`](https://github.com/JohanMouchet/fluxgrid/blob/master/assets/dist/css/fluxgrid-debug.min.css) (optional, not recommended in production)

    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="fluxgrid/fluxgrid-debug.min.css"
    />
    ```

### B. With the provided build tool

- Download the repo
- Install the dependencies: `$ npm i`
- Customise the grid variables from `_settings.scss` to your liking:
  - `$fluxgrid-division`
  - `$fluxgrid-breakpoints`
- To list available tasks, try running: `$ npx gulp --tasks`
- To build the grid, run: `$ npx gulp prod`, with the optional flags `--debug`
- Link the output files to your document's `<head>` as above

### C. Within your own build environment (Webpack / Gulp / Grunt / any)

- Add the folder `assets/src/scss/fluxgrid/` to your build environment
- Customise the grid variables from `_settings.scss` to your liking. It is recommended to override the `!default` ones in another file, but you can also edit them directly:
  - `$fluxgrid-division`
  - `$fluxgrid-breakpoints`
- Run `fluxgrid.scss` and optionally (not recommended in production) `fluxgrid-debug.scss` through your build. It is advised to Autoprefix and minify them
- Link the output files to your document's `<head>` as above
