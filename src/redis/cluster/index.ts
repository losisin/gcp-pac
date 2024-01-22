import { disallowDefaultNetwork } from './disallowDefaultNetwork'
import { requireAuthorizationMode } from './requireAuthorizationMode'
import { requireTransitEncryptionMode } from './requireTransitEncryptionMode'

export const clusterPolicies = [
	disallowDefaultNetwork,
	requireAuthorizationMode,
	requireTransitEncryptionMode
]
