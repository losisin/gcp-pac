import { disallowDefaultVpc } from './disallowDefaultVpc'
import { disallowEndOfLifeVersion } from './disallowEndOfLifeVersion'
import { disallowImplicitPublicWhitelist } from './disallowImplicitPublicWhitelist'
import { disallowPublicIp } from './disallowPublicIp'
import { requireAutomatedBackup } from './requireAutomatedBackup'
import { requireCmek } from './requireCmek'
import { requireDeletionProtection } from './requireDeletionProtection'
import { requireHighAvailability } from './requireHighAvailability'
import { requirePointInTimeRecovery } from './requirePointInTimeRecovery'
import { requireSslConnections } from './requireSslConnections'
import { mysqlPolicies } from './mysql'
import { postgresPolicies } from './postgres'
import { sqlserverPolicies } from './sqlserver'

export const sqlPolicies = [
	...mysqlPolicies,
	...postgresPolicies,
	...sqlserverPolicies,
	disallowDefaultVpc,
	disallowEndOfLifeVersion,
	disallowImplicitPublicWhitelist,
	disallowPublicIp,
	requireAutomatedBackup,
	requireCmek,
	requireDeletionProtection,
	requireHighAvailability,
	requirePointInTimeRecovery,
	requireSslConnections
]
