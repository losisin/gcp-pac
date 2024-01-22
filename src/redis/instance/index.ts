import { disallowDefaultNetwork } from './disallowDefaultNetwork'
import { disallowEndOfLife } from './disallowEndOfLife'
import { requireAuthEnabled } from './requireAuthEnabled'
import { requireCustomerManagedKey } from './requireCustomerManagedKey'
import { requireHighAvailabilityTier } from './requireHighAvailabilityTier'
import { requireTransitEncryptionMode } from './requireTransitEncryptionMode'

export const instancePolicies = [
	disallowDefaultNetwork,
	disallowEndOfLife,
	requireAuthEnabled,
	requireCustomerManagedKey,
	requireHighAvailabilityTier,
	requireTransitEncryptionMode
]
