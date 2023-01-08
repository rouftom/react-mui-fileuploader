
# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).


## [1.0.0] - 2023-01-08

### Added
PlaceholderImageDimension
- Support of typescript
  
- Make `onContextReady` callback optional

- Add prop `showPlaceholderImage` to show or hide the placeholder image
  
- Add prop `PlaceholderGridProps` to customize the placeholder `Grid` props

- Add prop `LabelsGridProps` to customize the labels `Grid` props

### Changed

- Typecript definition file has been improved

- Update `@babel/core` dependency to v7.20.12 and `rollup` to v3.9.1

- README.md improved by [@mikocot](https://github.com/mikocot) to show a real usecase of the library

### Removed

- `@mui/styles` has been removed

### Fixed

- Improve typo in README.md

### Deprecated


## [0.4.1] - 2023-01-05

### Added

- Add `onFilesChange` callback to return files according to getBase64 prop where input files change

- Add project source map files

### Changed

### Removed

### Fixed

- Improve typo in README.md

### Deprecated


## [0.4.0] - 2022-12-31

### Added

- Accepted file type can now be specified with `acceptedType` prop

- We can get now the original input files by setting the `getBase64` to false. Its default value is `false`

- Component context API can now be accessed with `onContextReady` event handler props

- Banner placeholer image sizes can now be managed with `placeholderImageDimension` prop

### Changed

- Project npm packages updated

### Removed

### Fixed

### Deprecated

- `containerProps` prop replaced with `ContainerProps`

- `bannerProps` prop replaced with `BannerProps`


## [0.3.0] - 2022-11-03

### Added

- Typescript definition by [@Shirasawa](https://github.com/ShirasawaSama) in PR rouftom/react-mui-fileuploader#3

### Changed

### Removed

### Fixed

- Multi-instances bug fixed by [@Shirasawa](https://github.com/ShirasawaSama) in PR rouftom/react-mui-fileuploader#3



## [0.2.0] - 2022-05-06

### Added

### Changed

### Removed

### Fixed

- Fix svg rendering bug

- Fix typo in README.md


## [0.1.0] - 2021-10-08

### Added

### Changed


### Deprecated

### Removed

### Fixed

### Security
