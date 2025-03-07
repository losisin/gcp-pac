# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Fixed

- Fix CI workflow status badge [#342](https://github.com/losisin/gcp-pac/pull/342)

## [1.10.2] - 2025-03-06

### Changed

- Update changelog and release new version [#341](https://github.com/losisin/gcp-pac/pull/341)
- Update `npm` packages [#340](https://github.com/losisin/gcp-pac/pull/340)
- Update storage versioning policy [#339](https://github.com/losisin/gcp-pac/pull/339)

## [1.10.1] - 2025-01-27

### Changed

- Update `npm` packages [#332](https://github.com/losisin/gcp-pac/pull/332)
- Group dependabot updates [#331](https://github.com/losisin/gcp-pac/pull/331)

## [1.10.0] - 2024-12-06

### Added

- Cloud Run V2 [#322](https://github.com/losisin/gcp-pac/pull/322)
  - `cloudrunv2-service-require-deletion-protection`
  - `cloudrunv2-job-require-deletion-protection`
- Cloud SQL [#323](https://github.com/losisin/gcp-pac/pull/323)
  - `sql-require-password-validation-policy`

### Changed

- Update `npm` packages [#319](https://github.com/losisin/gcp-pac/pull/319)
- Group dependabot updates [#317](https://github.com/losisin/gcp-pac/pull/317)
- Drop PostgreSQL 12 [#323](https://github.com/losisin/gcp-pac/pull/323)

### Fixed

- Fix various typos [#318](https://github.com/losisin/gcp-pac/pull/318)

## [1.9.15] - 2024-09-18

### Changed

- Update `npm` packages [#260](https://github.com/losisin/gcp-pac/pull/260)

## [1.9.14] - 2024-08-30

### Changed

- Update `npm` packages [#242](https://github.com/losisin/gcp-pac/pull/242)

## [1.9.13] - 2024-08-06

### Changed

- Update `npm` packages [#223](https://github.com/losisin/gcp-pac/pull/223)

### Fixed

- Fix changelog [#203](https://github.com/losisin/gcp-pac/pull/203)

## [1.9.12] - 2024-07-11

### Changed

- Update `npm` packages [#202](https://github.com/losisin/gcp-pac/pull/202)

## [1.9.11] - 2024-06-11

### Changed

- Update `npm` packages [#181](https://github.com/losisin/gcp-pac/pull/181)

## [1.9.10] - 2024-05-22

### Changed

- Update `npm` packages [#165](https://github.com/losisin/gcp-pac/pull/165)

## [1.9.9] - 2024-05-09

### Fixed

- Fix typo in 'storage-disallow-public-access' [#156](https://github.com/losisin/gcp-pac/pull/156)

### Changed

- Update `npm` packages [#155](https://github.com/losisin/gcp-pac/pull/155)

## [1.9.8] - 2024-04-18

### Changed

- Update CloudFunctions minimum supported runtime [#141] (https://github.com/losisin/gcp-pac/pull/141)
- Update `npm` packages [#142](https://github.com/losisin/gcp-pac/pull/142)

## [1.9.7] - 2024-04-08

### Changed

- Update `npm` packages [#132](https://github.com/losisin/gcp-pac/pull/132)

## [1.9.6] - 2024-03-28

### Changed

- Update `npm` packages [#123](https://github.com/losisin/gcp-pac/pull/123)

## [1.9.5] - 2024-03-19

### Fixed

- KMS CryptoKey rotation policy [#117](https://github.com/losisin/gcp-pac/pull/117)

### Changed

- Update `npm` packages [#118](https://github.com/losisin/gcp-pac/pull/118)

## [1.9.4] - 2024-03-15

### Removed

- Remove `notebooks` policies due to deprecation warning [#111](https://github.com/losisin/gcp-pac/pull/111)

### Changed

- Update `npm` packages [#110](https://github.com/losisin/gcp-pac/pull/110)

## [1.9.3] - 2024-03-02

### Fixed

- Dependabot versioning strategy [#96](https://github.com/losisin/gcp-pac/pull/96)

### Changed

- Bump @pulumi/pulumi from 3.108.0 to 3.108.1 [#97](https://github.com/losisin/gcp-pac/pull/97)

## [1.9.2] - 2024-03-01

### Fixed

- Dependabot versioning strategy [#95](https://github.com/losisin/gcp-pac/pull/95)

### Changed

- Bump @types/node from 20.11.20 to 20.11.21 [#91](https://github.com/losisin/gcp-pac/pull/91)
- Bump @pulumi/pulumi from 3.107.0 to 3.108.0 [#93](https://github.com/losisin/gcp-pac/pull/93)
- Bump @types/node from 20.11.22 to 20.11.24 [#94](https://github.com/losisin/gcp-pac/pull/94)

## [1.9.1] - 2024-02-27

### Changed

- Update packages [#90](https://github.com/losisin/gcp-pac/pull/90)

## [1.9.0] - 2024-02-20

### Added

- Service Account policies [#82](https://github.com/losisin/gcp-pac/pull/82)
  - `disallowUserManagedKeys`
- Projects
  - `disallowAdminPrivileges`
  - `disallowServiceAccountTokenCreator`
  - `disallowServiceAccountUser`
  - `requireApiKeySourceRestrictions`
  - `requireApiKeyTargetRestrictions`
- Folder
  - `disallowAdminPrivileges`
  - `disallowServiceAccountTokenCreator`
  - `disallowServiceAccountUser`
- Organizations
  - `disallowAdminPrivileges`
  - `disallowServiceAccountTokenCreator`
  - `disallowServiceAccountUser`

### Changed

- Update packages [#81](https://github.com/losisin/gcp-pac/pull/81)

## [1.8.5] - 2024-02-13

### Changed

- Update packages [#77](https://github.com/losisin/gcp-pac/pull/77)

## [1.8.4] - 2024-02-01

### Changed

- Update packages [#66](https://github.com/losisin/gcp-pac/pull/66)

## [1.8.3] - 2024-01-29

### Changed

- Update packages [#59](https://github.com/losisin/gcp-pac/pull/59)

## [1.8.2] - 2024-01-25

### Fixed

- Fix backend service CDN policy [#54](https://github.com/losisin/gcp-pac/pull/54)

### Changed

- Update packages [#55](https://github.com/losisin/gcp-pac/pull/55)

## [1.8.1] - 2024-01-25

### Fixed

- Fix backend service security policy [#51](https://github.com/losisin/gcp-pac/pull/51)

### Changed

- Update packages [#52](https://github.com/losisin/gcp-pac/pull/52)

## [1.8.0] - 2024-01-23

### Added

- Bigtable policies [#39](https://github.com/losisin/gcp-pac/pull/39)
  - `requireDeletionProtection`
  - `requireInstanceCmek`
- Vertex AI policies [#40](https://github.com/losisin/gcp-pac/pull/40)
  - `requireDatasetCmek`
  - `requireMetadataStoreCmek`
- Notebooks policies [#40](https://github.com/losisin/gcp-pac/pull/40)
  - `disallowDefaultNetwork`
  - `requireInstanceCmek`
  - `requireNoPublicIp`
- Projects policies [#41](https://github.com/losisin/gcp-pac/pull/41)
  - `requireApiKeyRestrictions`
- Dataproc policies [#45](https://github.com/losisin/gcp-pac/pull/45)
  - `requireClusterEncryptionConfig`
  - `requireClusterInternalIpOnly`
  - `requireMetastoreServiceEncryptionConfig`
- Datafusion policies [#45](https://github.com/losisin/gcp-pac/pull/45)
  - `disallowDefaultNetwork`
  - `requireCryptoKeyConfig`
  - `requireEnableRbac`
  - `requireEnableStackdriverLogging`
  - `requireEnableStackdriverMonitoring`
  - `requirePrivateInstance`

### Changed

- Update packages [#46](https://github.com/losisin/gcp-pac/pull/46)

## [1.7.0] - 2024-01-22

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
- Artifact Registry policies [#35](https://github.com/losisin/gcp-pac/pull/35)
  - `disallowPublicAccess`
  - `requireCleanupPolicy`
  - `requireCustomerManagedKey`
- KMS policies [#36](https://github.com/losisin/gcp-pac/pull/36)
  - `disallowPublicAccess`
  - `requireRotationPeriod`
- Spanner policies [#37](https://github.com/losisin/gcp-pac/pull/37)
  - `requireDatabaseCmek`
  - `requireDeletionProtection`
  - `requireEnableDropProtection`

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
