import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagLogMinDurationStatement = {
	name: 'postgres-require-log-min-duration-statement',
	description:
		"Check that PostgreSQL Database Instance has 'log_min_duration_statement' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const databaseFlags = args.props.settings?.databaseFlags
			const databaseVersion = args.props.databaseVersion
			if (databaseFlags && databaseVersion.startsWith('POSTGRES')) {
				const flagLocalInfile = databaseFlags.find(
					(flag: any) => flag.name === 'log_min_duration_statement'
				)
				if (flagLocalInfile && flagLocalInfile.value !== '-1') {
					reportViolation(
						"Ensure that the 'log_min_duration_statement' database flag for a PostgreSQL instance is set to '-1'."
					)
				}
			}
		}
	}
}
