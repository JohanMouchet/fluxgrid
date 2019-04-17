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

Link the [minified](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/dist/css/flexboxgrid.min.css) CSS file (`assets/dist/flexboxgrid.min.css`) to your document's `<head>`:

```
<head>
  <link rel="stylesheet" href="**/flexboxgrid.min.css" type="text/css">
</head>
```

### B. Within a build environment (Gulp / Grunt / any)

- Add these files from `assets/src/` to your build environment:
  - [`_flexboxgrid-settings.scss`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/src/scss/_flexboxgrid-settings.scss)
  - [`_flexboxgrid-grid.scss`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/src/scss/_flexboxgrid-grid.scss)
  - [`_flexboxgrid-debug.scss`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/src/scss/_flexboxgrid-debug.scss.scss) (optional)
- Customise the grid variables from `_flexboxgrid-settings.scss` to your liking. It is recommended to override the `!default` ones in another file, but you can also edit them directly:
  - `$grid-division`
  - `$grid-gutter`
  - `$grid-breakpoints`
- Run `flexboxgrid.scss` trough your build (it is advised to Autoprefix and minify it)
- Link the output file to your document's `<head>`

## Development

- Install the dependencies: `$ npm i`
- Use npx to run gulp: `$ npx gulp <option>`
- To list available tasks, try running: `$ npx gulp --tasks`

## TODO

- Separate homeview.css from prod build
- Conditional @import debug
- Split media queries?
