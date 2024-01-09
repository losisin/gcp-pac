import { disallowContainerRegistry } from './disallowContainerRegistry'
import { requireAutoRepairNodes } from './requireAutoRepairNodes'
import { requireAutoUpgradeNodes } from './requireAutoUpgradeNodes'
import { requireBinaryAuthorization } from './requireBinaryAuthorization'
import { requireConfidentialNodes } from './requireConfidentialNodes'
import { requireDatabaseEncryption } from './requireDatabaseEncryption'
import { requireEnableIntegrityMonitoring } from './requireEnableIntegrityMonitoring'
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
	requireAutoRepairNodes,
	requireAutoUpgradeNodes,
	requireBinaryAuthorization,
	requireConfidentialNodes,
	requireDatabaseEncryption,
	requireEnableIntegrityMonitoring,
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
