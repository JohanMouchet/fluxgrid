# ![Fluxgrid](src/img/fluxgrid.png)

_Responsive and customisable utility-based CSS grid built with Sass._

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

Head over the [doc page](https://johanmouchet.github.io/fluxgrid/index.html).

## Getting Started

Choose your preferred way:

### A. Quick start, with the default config

- [Install](#install) Fluxgrid
- Import it to your build environment, either with:
  - Sass: `@import "~fluxgrid/dist/fluxgrid.css";`
  - JS: `import "fluxgrid/dist/fluxgrid.css";`
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
  - Sass: `@import "~fluxgrid/src/fluxgrid.scss";`
  - JS: `import "fluxgrid/src/fluxgrid.scss";`
- Optionally (not recommended in production) import `fluxgrid-debug.scss` the same way
- Run these through your build pipeline. It is advised to Autoprefix and minify them

## Development

### Scripts

### Deployment

### Contribution
