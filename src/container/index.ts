import { disallowContainerRegistry } from './disallowContainerRegistry'
import { disallowIssueClientCertificate } from './disallowIssueClientCertificate'
import { disallowLegacyAbac } from './disallowLegacyAbac'
import { requireAutoRepairNodes } from './requireAutoRepairNodes'
import { requireAutoUpgradeNodes } from './requireAutoUpgradeNodes'
import { requireBinaryAuthorization } from './requireBinaryAuthorization'
import { requireConfidentialNodes } from './requireConfidentialNodes'
import { requireContainerOptimizedOs } from './requireContainerOptimizedOs'
import { requireDatabaseEncryption } from './requireDatabaseEncryption'
import { requireEnableIntegrityMonitoring } from './requireEnableIntegrityMonitoring'
import { requireEnableNetworkPolicy } from './requireEnableNetworkPolicy'
import { requireEnablePrivateEndpoint } from './requireEnablePrivateEndpoint'
import { requireEnableSecureBoot } from './requireEnableSecureBoot'
import { requireEnableShieldedNodes } from './requireEnableShieldedNodes'
import { requireLoggingService } from './requireLoggingService'
import { requireMasterAuthorizedNetworks } from './requireMasterAuthorizedNetworks'
import { requireMonitoringService } from './requireMonitoringService'
import { requirePrivateClusterConfig } from './requirePrivateClusterConfig'
import { requireRemoveDefaultNodePool } from './requireRemoveDefaultNodePool'
import { requireWorkloadIdentityConfig } from './requireWorkloadIdentityConfig'

export const containerPolicies = [
	disallowContainerRegistry,
	disallowIssueClientCertificate,
	disallowLegacyAbac,
	requireAutoRepairNodes,
	requireAutoUpgradeNodes,
	requireBinaryAuthorization,
	requireConfidentialNodes,
	requireContainerOptimizedOs,
	requireDatabaseEncryption,
	requireEnableIntegrityMonitoring,
	requireEnableNetworkPolicy,
	requireEnablePrivateEndpoint,
	requireEnableSecureBoot,
	requireEnableShieldedNodes,
	requireLoggingService,
	requireMasterAuthorizedNetworks,
	requireMonitoringService,
	requirePrivateClusterConfig,
	requireRemoveDefaultNodePool,
	requireWorkloadIdentityConfig
]
