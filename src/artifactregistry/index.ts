import { disallowPublicAccess } from './disallowPublicAccess'
import { requireCleanupPolicy } from './requireCleanupPolicy'
import { requireCustomerManagedKey } from './requireCustomerManagedKey'

export const artifactregistryPolicies = [
	disallowPublicAccess,
	requireCleanupPolicy,
	requireCustomerManagedKey
]
