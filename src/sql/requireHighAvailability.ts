import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireHighAvailability = {
	name: 'sql-require-high-availability',
	description: 'Check that CloudSQL Database Instance is highly available.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			if (settings) {
				const availabilityType = settings.availabilityType
				if (availabilityType === 'ZONAL') {
					reportViolation(
						"CloudSQL Database Instance should set 'availabilityType' set to 'REGIONAL'."
					)
				}
			}
		}
	}
}
