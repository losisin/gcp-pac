import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagUserOptions = {
	name: 'sqlserver-require-user-options',
	description:
		"Check that SQL Server Database Instance has 'user options' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const databaseFlags = args.props.settings?.databaseFlags
			const databaseVersion = args.props.databaseVersion
			if (databaseFlags && databaseVersion.startsWith('SQLSERVER')) {
				const flagLocalInfile = databaseFlags.find(
					(flag: any) => flag.name === 'user options'
				)
				if (flagLocalInfile) {
					reportViolation(
						"Ensure that the 'user options' database flag for a SQL SERVER instance is not configured."
					)
				}
			}
		}
	}
}
