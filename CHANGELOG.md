# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

- Try import from "~/fluxgrid"
- Classes a la Tailwind?
  - Provide migration Regex
- Document Offsets
- Deploy
  - Set git tag
  - Publish to npm

## [5.0.0] - 2020-08-04

### Changed

- Development build tool from Gulp to Parcel
- [Breaking] Imports:
  - Pre-compiled: from `"~fluxgrid/assets/src/scss/fluxgrid/fluxgrid.scss"` to `"~fluxgrid/src/fluxgrid.scss"`
  - Compiled: from `"~fluxgrid/assets/dist/css/fluxgrid/fluxgrid.min.css"` to `"~fluxgrid/dist/fluxgrid.css"`

### Removed

- `$fluxgrid-namespace` Sass config. The new recommended way is to raise the specificity by wrapping the import into a class:
  ```
    .namespace {
      @import "fluxgrid";
    }
  ```
