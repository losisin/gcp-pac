import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlag3625 = {
	name: 'sqlserver-require-3625-trace-flag',
	description: "Check that SQL Server Database Instance has '3625' trace flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			const databaseVersion = args.props.databaseVersion
			if (settings && databaseVersion.startsWith('SQLSERVER')) {
				const message =
					"Ensure that the '3625' trace flag for a SQL Server instance is set to 'off'."
				if (!settings.databaseFlags) {
					reportViolation(message)
					return
				}
				const flagLocalInfile = settings.databaseFlags.find(
					(flag: any) => flag.name === '3625'
				)
				if (!flagLocalInfile || flagLocalInfile.value !== 'off') {
					reportViolation(message)
				}
			}
		}
	}
}
