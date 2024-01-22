import { requireDatabaseCmek } from './requireDatabaseCmek'
import { requireDeletionProtection } from './requireDeletionProtection'
import { requireEnableDropProtection } from './requireEnableDropProtection'

export const spannerPolicies = [
	requireDatabaseCmek,
	requireDeletionProtection,
	requireEnableDropProtection
]
