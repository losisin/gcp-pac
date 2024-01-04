import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagContainedDatabaseAuthentication = {
	name: 'sqlserver-require-contained-database-authentication',
	description:
		"Check that SQL Server Database Instance has 'contained database authentication' flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			const databaseVersion = args.props.databaseVersion
			if (settings && databaseVersion.startsWith('SQLSERVER')) {
				const message =
					"Ensure that the 'contained database authentication' trace flag for a SQL Server instance is set to 'off'."
				if (!settings.databaseFlags) {
					reportViolation(message)
					return
				}
				const flagLocalInfile = settings.databaseFlags.find(
					(flag: any) => flag.name === 'contained database authentication'
				)
				if (!flagLocalInfile || flagLocalInfile.value !== 'off') {
					reportViolation(message)
				}
			}
		}
	}
}
