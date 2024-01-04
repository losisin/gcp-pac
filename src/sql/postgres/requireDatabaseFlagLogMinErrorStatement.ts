import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagLogMinErrorStatement = {
	name: 'postgres-require-log-min-error-statement',
	description:
		"Check that PostgreSQL Database Instance has 'log_min_error_statement' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const databaseFlags = args.props.settings?.databaseFlags
			const databaseVersion = args.props.databaseVersion
			if (databaseFlags && databaseVersion.startsWith('POSTGRES')) {
				const flagLocalInfile = databaseFlags.find(
					(flag: any) => flag.name === 'log_min_error_statement'
				)
				const flagFail = ['log', 'fatal', 'panic']
				if (flagLocalInfile && flagFail.includes(flagLocalInfile.value)) {
					reportViolation(
						"Ensure that the 'log_min_error_statement' database flag for a PostgreSQL instance is set to 'error' or stricter."
					)
				}
			}
		}
	}
}
