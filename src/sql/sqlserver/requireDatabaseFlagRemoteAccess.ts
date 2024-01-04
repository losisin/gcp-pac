import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagRemoteAccess = {
	name: 'sqlserver-require-remote-access',
	description:
		"Check that SQL Server Database Instance has 'remote access' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			const databaseVersion = args.props.databaseVersion
			if (settings && databaseVersion.startsWith('SQLSERVER')) {
				const message =
					"Ensure that the 'remote access' database flag for a SQL Server instance is set to 'off'."
				if (!settings.databaseFlags) {
					reportViolation(message)
					return
				}
				const flagLocalInfile = settings.databaseFlags.find(
					(flag: any) => flag.name === 'remote access'
				)
				if (!flagLocalInfile || flagLocalInfile.value !== 'off') {
					reportViolation(message)
				}
			}
		}
	}
}
