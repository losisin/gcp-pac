# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Cloud DNS policies [#30](https://github.com/losisin/gcp-pac/pull/30)
  - `disallowRsasha1Algorithm`
  - `requireDnssecStateOn`
- Pub/Sub policies [#31](https://github.com/losisin/gcp-pac/pull/31)
  - `requireSubscriptionDeadLetterTopic`
  - `requireTopicCmek`
- Redis policies [#33](https://github.com/losisin/gcp-pac/pull/33)
  - Cluster
    - `disallowDefaultNetwork`
    - `requireAuthorizationMode`
    - `requireTransitEncryptionMode`
  - Instance
    - `disallowDefaultNetwork`
    - `disallowEndOfLife`
    - `requireAuthEnabled`
    - `requireCustomerManagedKey`
    - `requireHighAvailabilityTier`
    - `requireTransitEncryptionMode`
- Memcache policies [#34](https://github.com/losisin/gcp-pac/pull/34)
  - `disallowDefaultNetwork`
  - `disallowEndOfLife`
  - `requireNodeCount`

### Fixed

- Links to pull requests in CHANGELOG.md [#32](https://github.com/losisin/gcp-pac/pull/32)

## [1.6.0] - 2024-01-21

### Added

- Compute policies [#21](https://github.com/losisin/gcp-pac/pull/21)
  - Backend Service
    - `requireEnableCdn`
    - `requireLogConfig`
    - `requireSecurityPolicy`
  - Disk
    - `requireDiskEncryptionKey`
  - Firewall
    - `disallowCommonPortsPublicAccess`
    - `disallowDefaultNetwork`
    - `disallowPortRangePublicAccess`
    - `disallowProtocolPublicAccess`
    - `requireLogConfig`
  - Instance
    - `disallowDefaultServiceAccount`
    - `disallowExternalIp`
    - `disallowIpForward`
    - `disallowSerialPortEnable`
    - `requireBlockProjectSSHKeys`
    - `requireBootDiskEncryption`
    - `requireConfidentialInstanceConfig`
    - `requireDeletionProtection`
    - `requireShieldedInstanceConfig`
  - Project Metadata
    - `requireOsLogin`
  - SSL Policy
    - `disallowProfileCompatible`
    - `disallowWeakChipherSuites`
  - Subnetwork
    - `requireVpcFlowLogs`

### Changed

- Update packages [#28](https://github.com/losisin/gcp-pac/pull/28)

## [1.5.0] - 2024-01-09

### Added

- Container Registry policy [#19](https://github.com/losisin/gcp-pac/pull/19)
  - `disallowContainerRegistry`
- Container Cluster and NodePool policies [#19](https://github.com/losisin/gcp-pac/pull/19)
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

- Update packages and node engine version [#20](https://github.com/losisin/gcp-pac/pull/20)

### Fixed

- Fix typo in `backendserviceRequireSecuritypolicy` policy [#18](https://github.com/losisin/gcp-pac/pull/18)

## [1.4.1] - 2024-01-04

### Changed

- Split Cloud SQL policies depending on the database engine [#17](https://github.com/losisin/gcp-pac/pull/17)

### Fixed

- Fix prettier config [#17](https://github.com/losisin/gcp-pac/pull/17)

## [1.4.0] - 2024-01-02

### Added

- Cloud SQL policies [#12](https://github.com/losisin/gcp-pac/pull/12)
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

- Rename BigQuery policies that require CMEK [#11](https://github.com/losisin/gcp-pac/pull/11)
  - `datasetRequireCmek` -> `datasetRequireCmekKms`
  - `tableRequireCmek` -> `tableRequireCmekKms`
- Update package dependencies [#13](https://github.com/losisin/gcp-pac/pull/13)

## [1.3.0] - 2023-12-28

### Added

- Cloud Storage policies [#9](https://github.com/losisin/gcp-pac/pull/9)
  - `disallowPublicBuckets`
  - `disallowSelfBucketLogging`
  - `requireBucketLogging`
  - `requireBucketVersioning`
  - `requireCmek`
  - `requireUniformBucketLevelAccess`
- BigQuery policies [#10](https://github.com/losisin/gcp-pac/pull/10)
  - `datasetDeletionProtection`
  - `datasetDisallowPublicAccess`
  - `datasetRequireCmek`
  - `tableDeletionProtection`
  - `tableDisallowPublicAccess`
  - `tableRequireCmek`

## [1.2.0] - 2023-12-27

### Added

- added `.editorconfig` file [#8](https://github.com/losisin/gcp-pac/pull/8)
- CloudFunctions 1st and 2nd generation policies [#8](https://github.com/losisin/gcp-pac/pull/8)
  - `disallowEndOfLifeRuntime`
  - `disallowEnvsSecrets`
  - `disallowPlainHttp`
  - `disallowPublicIngress`
  - `disallowVpcConnectorPublicEgress`
  - `requireCmek`

## [1.1.1] - 2023-12-26

### Added

- CodeQL analysis [#4](https://github.com/losisin/gcp-pac/pull/4)
- dependabot npm scan [#4](https://github.com/losisin/gcp-pac/pull/4)
- `cloudrunv2-disallow-public-ingress` [#5](https://github.com/losisin/gcp-pac/pull/5)
- disallow environment variables from Secret Manager - `cloudrun.Service`, `cloudrunv2.Service` and `cloudrunv2.Job` [#6](https://github.com/losisin/gcp-pac/pull/6)

### Changed

- Update test and code file structure [#6](https://github.com/losisin/gcp-pac/pull/6)

### Fixed

- codeql event on push in main branch [#6](https://github.com/losisin/gcp-pac/pull/6)

## [1.1.0] - 2023-12-25

### Added

- Add `gcp:compute:BackendService` policy [#3](https://github.com/losisin/gcp-pac/pull/3)
- Add integration tests [#3](https://github.com/losisin/gcp-pac/pull/3)

### Chaged

- Update README.md [#2](https://github.com/losisin/gcp-pac/pull/2)

## [1.0.0] - 2023-12-25

### Added

- Publish `gcp-pac` to NPM registry [#1](https://github.com/losisin/gcp-pac/pull/1)
- Add GithUb Actions workflows [#1](https://github.com/losisin/gcp-pac/pull/1)
- Add documentation [#1](https://github.com/losisin/gcp-pac/pull/1)
- `cloudrun.Service` policy [#1](https://github.com/losisin/gcp-pac/pull/1)
- `compute.BackendService` policy [#1](https://github.com/losisin/gcp-pac/pull/1)

### Fixed

### Changed

### Removed

### Security
