import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagUserConnections = {
	name: 'sqlserver-require-user-connections',
	description:
		"Check that SQL Server Database Instance has 'user connections' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const databaseFlags = args.props.settings?.databaseFlags
			const databaseVersion = args.props.databaseVersion
			if (databaseFlags && databaseVersion.startsWith('SQLSERVER')) {
				const flagLocalInfile = databaseFlags.find(
					(flag: any) => flag.name === 'user connections'
				)
				if (flagLocalInfile && flagLocalInfile.value !== '0') {
					reportViolation(
						"Ensure that the 'user connections' database flag for a SQL SERVER instance is set to a non-limiting value."
					)
				}
			}
		}
	}
}
