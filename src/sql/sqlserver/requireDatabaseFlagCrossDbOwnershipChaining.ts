import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagCrossDbOwnershipChaining = {
	name: 'sqlserver-require-cross-db-ownership-chaining',
	description:
		"Check that SQL Server Database Instance has 'cross db ownership chaining' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const databaseFlags = args.props.settings?.databaseFlags
			const databaseVersion = args.props.databaseVersion
			if (databaseFlags && databaseVersion.startsWith('SQLSERVER')) {
				const flagLocalInfile = databaseFlags.find(
					(flag: any) => flag.name === 'cross db ownership chaining'
				)
				if (flagLocalInfile && flagLocalInfile.value !== 'off') {
					reportViolation(
						"Ensure that the 'cross db ownership chaining' database flag for a SQL SERVER instance is set to 'off'."
					)
				}
			}
		}
	}
}
