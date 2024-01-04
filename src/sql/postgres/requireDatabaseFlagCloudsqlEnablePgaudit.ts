import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagCloudsqlEnablePgaudit = {
	name: 'postgres-require-cloudsql-enable-pgaudit',
	description:
		"Check that PostgreSQL Database Instance has 'cloudsql.enable_pgaudit' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			const databaseVersion = args.props.databaseVersion
			if (settings && databaseVersion.startsWith('POSTGRES')) {
				const message =
					"Ensure that the 'cloudsql.enable_pgaudit' database flag for a PostgreSQL instance is set to 'on'."
				if (!settings.databaseFlags) {
					reportViolation(message)
					return
				}
				const flagLocalInfile = settings.databaseFlags.find(
					(flag: any) => flag.name === 'cloudsql.enable_pgaudit'
				)
				if (!flagLocalInfile || flagLocalInfile.value !== 'on') {
					reportViolation(message)
				}
			}
		}
	}
}
