# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.0] - 2024-01-09

### Added

- Container Registry policy (#19)
  - `disallowContainerRegistry`
- Container Cluster and NodePool policies (#19)
  - `disallowIssueClientCertificate`
  - `disallowLegacyAbac`
  - `requireAutoRepairNodes`
  - `requireAutoUpgradeNodes`
  - `requireBinaryAuthorization`
  - `requireConfidentialNodes`
  - `requireContainerOptimizedOs`
  - `requireDatabaseEncryption`
  - `requireEnableIntegrityMonitoring`
  - `requireEnableNetworkPolicy`
  - `requireEnablePrivateEndpoint`
  - `requireEnableSecureBoot`
  - `requireEnableShieldedNodes`
  - `requireLoggingService`
  - `requireMasterAuthorizedNetworks`
  - `requireMonitoringService`
  - `requirePrivateClusterConfig`
  - `requireRemoveDefaultNodePool`
  - `requireWorkloadIdentityConfig`

### Changed

- Update packages and node engine version (#20).

### Fixed

- Fix typo in `backendserviceRequireSecuritypolicy` policy (#18).

## [1.4.1] - 2024-01-04

### Changed

- Split Cloud SQL policies depending on the database engine (#17).

### Fixed

- Fix prettier config (#17).

## [1.4.0] - 2024-01-02

### Added

- Cloud SQL policies (#12):
  - `disallowDefaultVpc`
  - `disallowEndOfLifeVersion`
  - `disallowImplicitPublicWhitelist`
  - `disallowPublicIp`
  - `requireAutomatedBackup`
  - `requireCmek`
  - `requireDeletionProtection`
  - `requireHighAvailability`
  - `requirePointInTimeRecovery`
  - `requireSslConnections`
- MySQL policies (#14):
  - `requireBinaryLogEnabledMysql`
  - `requireDatabaseFlagsMysql`
  - `requireRootPasswordMysql`
- SQL Server policies (#15):
  - `requireDatabaseFlagsSqlServer`
- PostgreSQL policies (#16):
  - `requireDatabaseFlagsPostgresql`

### Changed

- Rename BigQuery policies that require CMEK (#11):
  - `datasetRequireCmek` -> `datasetRequireCmekKms`
  - `tableRequireCmek` -> `tableRequireCmekKms`
- Update package dependencies (#13).

## [1.3.0] - 2023-12-28

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
