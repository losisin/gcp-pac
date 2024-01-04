import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagLogStatement = {
	name: 'postgres-require-log-statement',
	description:
		"Check that PostgreSQL Database Instance has 'log_statement' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			const databaseVersion = args.props.databaseVersion
			if (settings && databaseVersion.startsWith('POSTGRES')) {
				const message =
					"Ensure that the 'log_statement' database flag for a PostgreSQL instance is not set to 'none'."
				if (!settings.databaseFlags) {
					reportViolation(message)
					return
				}
				const flagLocalInfile = settings.databaseFlags.find(
					(flag: any) => flag.name === 'log_statement'
				)
				if (!flagLocalInfile || flagLocalInfile.value === 'none') {
					reportViolation(message)
				}
			}
		}
	}
}
