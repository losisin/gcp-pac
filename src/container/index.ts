import { disallowContainerRegistry } from './disallowContainerRegistry'
import { requireConfidentialNodes } from './requireConfidentialNodes'
import { requireDatabaseEncryption } from './requireDatabaseEncryption'
import { requireEnableShieldedNodes } from './requireEnableShieldedNodes'
import { requireMasterAuthorizedNetworks } from './requireMasterAuthorizedNetworks'
import { requireRemoveDefaultNodePool } from './requireRemoveDefaultNodePool'

export const containerPolicies = [
	requireEnableShieldedNodes,
	requireConfidentialNodes,
	requireDatabaseEncryption,
	disallowContainerRegistry,
	requireMasterAuthorizedNetworks,
	requireRemoveDefaultNodePool
]
