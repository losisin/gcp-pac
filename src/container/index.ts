import { disallowContainerRegistry } from './disallowContainerRegistry'
import { requireAutoRepairNodes } from './requireAutoRepairNodes'
import { requireAutoUpgradeNodes } from './requireAutoUpgradeNodes'
import { requireConfidentialNodes } from './requireConfidentialNodes'
import { requireDatabaseEncryption } from './requireDatabaseEncryption'
import { requireEnableIntegrityMonitoring } from './requireEnableIntegrityMonitoring'
import { requireEnableSecureBoot } from './requireEnableSecureBoot'
import { requireEnableShieldedNodes } from './requireEnableShieldedNodes'
import { requireMasterAuthorizedNetworks } from './requireMasterAuthorizedNetworks'
import { requireRemoveDefaultNodePool } from './requireRemoveDefaultNodePool'

export const containerPolicies = [
	disallowContainerRegistry,
	requireAutoRepairNodes,
	requireAutoUpgradeNodes,
	requireConfidentialNodes,
	requireDatabaseEncryption,
	requireEnableIntegrityMonitoring,
	requireEnableSecureBoot,
	requireEnableShieldedNodes,
	requireMasterAuthorizedNetworks,
	requireRemoveDefaultNodePool
]
