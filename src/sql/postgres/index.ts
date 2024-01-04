import { requireDatabaseFlagCloudsqlEnablePgaudit } from './requireDatabaseFlagCloudsqlEnablePgaudit'
import { requireDatabaseFlagLogConnections } from './requireDatabaseFlagLogConnections'
import { requireDatabaseFlagLogDisconnections } from './requireDatabaseFlagLogDisconnections'
import { requireDatabaseFlagLogErrorVerbosity } from './requireDatabaseFlagLogErrorVerbosity'
import { requireDatabaseFlagLogMinDurationStatement } from './requireDatabaseFlagLogMinDurationStatement'
import { requireDatabaseFlagLogMinErrorStatement } from './requireDatabaseFlagLogMinErrorStatement'
import { requireDatabaseFlagLogStatement } from './requireDatabaseFlagLogStatement'

export const postgresPolicies = [
	requireDatabaseFlagCloudsqlEnablePgaudit,
	requireDatabaseFlagLogConnections,
	requireDatabaseFlagLogDisconnections,
	requireDatabaseFlagLogErrorVerbosity,
	requireDatabaseFlagLogMinDurationStatement,
	requireDatabaseFlagLogMinErrorStatement,
	requireDatabaseFlagLogStatement
]
