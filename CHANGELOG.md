# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.1] - 2025-10-05

### Patched

- Resolved an issue where the default settings couldn't be overwritten

## [6.0.0] - 2025-07-02

### Changed

- [Breaking] Updated Sass peer dependency support to ^1.89.2

  replace

  ```SCSS
  @import "fluxgrid/src/fluxgrid";
  ```

  by

  ```SCSS
  @use "fluxgrid/src/fluxgrid";
  ```

- Updated development dependencies

## [5.1.0] - 2020-08-23

### Changed

- Enforced CSS declaration order through `stylelint-config-recess-order`

## [5.0.0] - 2020-08-10

### Changed

- [Breaking] Dropped support of IE 10, still support IE 11
- [Breaking] Import paths:
  - Sass: `"~fluxgrid/assets/src/scss/fluxgrid/fluxgrid"` to `"~fluxgrid/src/fluxgrid"`
  - JS: `"fluxgrid/assets/src/scss/fluxgrid/fluxgrid.scss"` to `"fluxgrid/src/fluxgrid.scss"`
- [Breaking] Naming scheme. To migrate, use these Regex search and replace:
  1. `cell--@xs` > `cell--grow-@xs`
  2. `cell--0-@xs` > `cell--shrink-@xs`
  3. `container--(\w+)` > `container-$1`
  4. `(grid|cell)-(-\w+)?-@(\w+)` > `$3:$1$2`
  5. `(container|grid|cell)-([a-z]+)([A-Z])` > `$1-$2-\L$3` make sure to enable use _Match Case_
  6. `xs:(container|grid|cell)` > `$1`
- Development build tool from Gulp to Parcel

### Removed

- [Breaking] `$fluxgrid-namespace` Sass config. The new recommended way is to raise the specificity by wrapping the import into a class:
  ```SCSS
    .namespace {
      @import "fluxgrid";
    }
  ```
