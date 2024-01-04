import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagLocalInfile = {
	name: 'mysql-require-database-flag-local-infile',
	description:
		"Check that MySQL Database Instance has 'local_infile' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			const databaseVersion = args.props.databaseVersion
			if (settings && databaseVersion.startsWith('MYSQL')) {
				const message =
					"Ensure that the 'local_infile' database flag for a MySQL instance is set to 'off'."
				if (!settings.databaseFlags) {
					reportViolation(message)
					return
				}
				const flagLocalInfile = settings.databaseFlags.find(
					(flag: any) => flag.name === 'local_infile'
				)
				if (!flagLocalInfile || flagLocalInfile.value !== 'off') {
					reportViolation(message)
				}
			}
		}
	}
}
