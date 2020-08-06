# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Classes a la Tailwind?
  - Provide migration Regex
- Document Offsets
- Deploy
  - Set git tag
  - Publish to npm

## [5.0.0] - 2020-08-04

### Changed

- Development build tool from Gulp to Parcel
- [Breaking] Dropped support of IE 10, still support IE 11
- [Breaking] Import paths:
  - Sass: `"~fluxgrid/assets/src/scss/fluxgrid/fluxgrid"` to `"~fluxgrid/src/fluxgrid"`
  - JS: `"fluxgrid/assets/src/scss/fluxgrid/fluxgrid.scss"` to `"fluxgrid/src/fluxgrid.scss"`

### Removed

- `$fluxgrid-namespace` Sass config. The new recommended way is to raise the specificity by wrapping the import into a class:
  ```
    .namespace {
      @import "fluxgrid";
    }
  ```
