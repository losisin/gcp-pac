import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagSkipShowDatabase = {
	name: 'mysql-require-database-flag-skip-show-database',
	description:
		"Check that MySQL Database Instance has 'skip_show_database' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			const databaseVersion = args.props.databaseVersion
			if (settings && databaseVersion.startsWith('MYSQL')) {
				const message =
					"Ensure that the 'skip_show_database' database flag for a MySQL instance is set to 'on'."
				if (!settings.databaseFlags) {
					reportViolation(message)
					return
				}
				const flagLocalInfile = settings.databaseFlags.find(
					(flag: any) => flag.name === 'skip_show_database'
				)
				if (!flagLocalInfile || flagLocalInfile.value !== 'on') {
					reportViolation(message)
				}
			}
		}
	}
}
