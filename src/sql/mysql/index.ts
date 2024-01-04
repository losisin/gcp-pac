import { requireBinaryLogEnabledMysql } from './requireBinaryLogEnabledMysql'
import { requireDatabaseFlagLocalInfile } from './requireDatabaseFlagLocalInfile'
import { requireDatabaseFlagSkipShowDatabase } from './requireDatabaseFlagSkipShowDatabase'
import { requireRootPasswordMysql } from './requireRootPasswordMysql'

export const mysqlPolicies = [
	requireBinaryLogEnabledMysql,
	requireDatabaseFlagLocalInfile,
	requireDatabaseFlagSkipShowDatabase,
	requireRootPasswordMysql
]
