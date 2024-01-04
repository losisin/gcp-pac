import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagLogDisconnections = {
	name: 'postgres-require-log-disconnections',
	description:
		"Check that PostgreSQL Database Instance has 'log_disconnections' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			const databaseVersion = args.props.databaseVersion
			if (settings && databaseVersion.startsWith('POSTGRES')) {
				const message =
					"Ensure that the 'log_disconnections' database flag for a PostgreSQL instance is set to 'on'."
				if (!settings.databaseFlags) {
					reportViolation(message)
					return
				}
				const flagLocalInfile = settings.databaseFlags.find(
					(flag: any) => flag.name === 'log_disconnections'
				)
				if (!flagLocalInfile || flagLocalInfile.value !== 'on') {
					reportViolation(message)
				}
			}
		}
	}
}
