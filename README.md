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

```html
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

The grid can be linked as a standalone file `1.9 kB (gzipped)` or as individual breakpoints files `3.7 kB (gzipped)`, which allows a slightly lighter download weight on mobile at no extra cost with HTTP/2.

Choose your preferred way:

### A. With the default config

- Link the files from `assets/dist/css/flexboxgrid/` to your document's `<head>`:

  - [`flexboxgrid.min.css`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/dist/css/flexboxgrid.min.css), as a standalone

    ```html
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="flexboxgrid/flexboxgrid.min.css"
    />
    ```

  - OR [`split/`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/dist/css/flexboxgrid/split/), as individual breakpoints files. Make sure to update the `media` dimension to your liking.

    <details>
      <summary>Example</summary>

    ```html
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="flexboxgrid/split/flexboxgrid-xs.min.css"
    />
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="flexboxgrid/split/flexboxgrid-sm.min.css"
    	media="(min-width: 426px)"
    />
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="flexboxgrid/split/flexboxgrid-md.min.css"
    	media="(min-width: 769px)"
    />
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="flexboxgrid/split/flexboxgrid-lg.min.css"
    	media="(min-width: 1025px)"
    />
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="flexboxgrid/split/flexboxgrid-xl.min.css"
    	media="(min-width: 1367px)"
    />
    ```

    </details>

  - [`flexboxgrid-debug.min.css`](https://github.com/JohanMouchet/flexboxgrid-sass/blob/master/assets/dist/css/flexboxgrid-debug.min.css) (optional, not recommended in production)

    ```html
    <link
    	rel="stylesheet"
    	type="text/css"
    	href="flexboxgrid/flexboxgrid-debug.min.css"
    />
    ```

### B. With the provided build tool

- Download the repo
- Install the dependencies: `$ npm i`
- Customise the grid variables from `_settings.scss` to your liking:
  - `$grid-division`
  - `$grid-gutter`
  - `$grid-breakpoints`
- To list available tasks, try running: `$ npx gulp --tasks`
- To build the grid, run: `$ npx gulp prod`, with the optional flags `--split --debug`
- Link the output files to your document's `<head>` as above

### C. Within your own build environment (Gulp / Grunt / any)

- Add the folder `assets/src/scss/flexboxgrid/` to your build environment
- Customise the grid variables from `_settings.scss` to your liking. It is recommended to override the `!default` ones in another file, but you can also edit them directly:
  - `$grid-division`
  - `$grid-gutter`
  - `$grid-breakpoints`
- Run `flexboxgrid.scss` OR `split/` and optionally (not recommended in production) `flexboxgrid-debug.scss` trough your build. It is advised to Autoprefix and minify them
- Link the output files to your document's `<head>` as above

## TODO

- Comment on flexbox over grid benefits
- Add a live Flexbox Grid Sass demo?
