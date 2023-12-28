# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Cloud Storage policies (#9):
  - `disallowPublicBuckets`
  - `disallowSelfBucketLogging`
  - `requireBucketLogging`
  - `requireBucketVersioning`
  - `requireCmek`
  - `requireUniformBucketLevelAccess`
- BigQuery policies (#10):
  - `datasetDeletionProtection`
  - `datasetDisallowPublicAccess`
  - `datasetRequireCmek`
  - `tableDeletionProtection`
  - `tableDisallowPublicAccess`
  - `tableRequireCmek`

## [1.2.0] - 2023-12-27

### Added

- added `.editorconfig` file (#8).
- CloudFunctions 1st and 2nd generation policies (#8):
  - `disallowEndOfLifeRuntime`
  - `disallowEnvsSecrets`
  - `disallowPlainHttp`
  - `disallowPublicIngress`
  - `disallowVpcConnectorPublicEgress`
  - `requireCmek`

## [1.1.1] - 2023-12-26

### Added

- CodeQL analysis (#4).
- dependabot npm scan (#4).
- `cloudrunv2-disallow-public-ingress` (#5).
- disallow environment variables from Secret Manager - `cloudrun.Service`, `cloudrunv2.Service` and `cloudrunv2.Job` (#6).

### Changed

- Update test and code file structure (#6).

### Fixed

- codeql event on push in main branch (#6).

## [1.1.0] - 2023-12-25

### Added

- Add `gcp:compute:BackendService` policy (#3).
- Add integration tests (#3).

### Chaged

- Update README.md (#2).

## [1.0.0] - 2023-12-25

### Added

- Publish `gcp-pac` to NPM registry (#1).
- Add GithUb Actions workflows (#1).
- Add documentation (#1).
- `cloudrun.Service` policy (#1).
- `compute.BackendService` policy (#1).

### Fixed

### Changed

### Removed

### Security
