import { requireDatabaseFlag3625 } from './requireDatabaseFlag3625'
import { requireDatabaseFlagContainedDatabaseAuthentication } from './requireDatabaseFlagContainedDatabaseAuthentication'
import { requireDatabaseFlagCrossDbOwnershipChaining } from './requireDatabaseFlagCrossDbOwnershipChaining'
import { requireDatabaseFlagExternalScriptsEnabled } from './requireDatabaseFlagExternalScriptsEnabled'
import { requireDatabaseFlagRemoteAccess } from './requireDatabaseFlagRemoteAccess'
import { requireDatabaseFlagUserConnections } from './requireDatabaseFlagUserConnections'
import { requireDatabaseFlagUserOptions } from './requireDatabaseFlagUserOptions'

export const sqlserverPolicies = [
	requireDatabaseFlag3625,
	requireDatabaseFlagContainedDatabaseAuthentication,
	requireDatabaseFlagCrossDbOwnershipChaining,
	requireDatabaseFlagExternalScriptsEnabled,
	requireDatabaseFlagRemoteAccess,
	requireDatabaseFlagUserConnections,
	requireDatabaseFlagUserOptions
]
