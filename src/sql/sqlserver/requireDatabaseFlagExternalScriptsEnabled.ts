import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseFlagExternalScriptsEnabled = {
	name: 'sqlserver-require-external-scripts-enabled',
	description:
		"Check that SQL Server Database Instance has 'external scripts enabled' database flag set appropriately.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const databaseFlags = args.props.settings?.databaseFlags
			const databaseVersion = args.props.databaseVersion
			if (databaseFlags && databaseVersion.startsWith('SQLSERVER')) {
				const flagLocalInfile = databaseFlags.find(
					(flag: any) => flag.name === 'external scripts enabled'
				)
				if (flagLocalInfile && flagLocalInfile.value !== 'off') {
					reportViolation(
						"Ensure that the 'external scripts enabled' database flag for a SQL SERVER instance is set to 'off'."
					)
				}
			}
		}
	}
}
