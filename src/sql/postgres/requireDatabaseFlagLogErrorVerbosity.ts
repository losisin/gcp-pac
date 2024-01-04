import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagLogErrorVerbosity = {
	name: 'postgres-require-log-error-verbosity',
	description:
		"Check that PostgreSQL Database Instance has 'log_error_verbosity' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const databaseFlags = args.props.settings?.databaseFlags
			const databaseVersion = args.props.databaseVersion
			if (databaseFlags && databaseVersion.startsWith('POSTGRES')) {
				const flagLocalInfile = databaseFlags.find(
					(flag: any) => flag.name === 'log_error_verbosity'
				)
				if (flagLocalInfile && flagLocalInfile.value === 'terse') {
					reportViolation(
						"Ensure that the 'log_error_verbosity' database flag for a PostgreSQL instance is not set to 'terse'."
					)
				}
			}
		}
	}
}
