import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowPublicIp = {
	name: 'sql-disallow-public-ip',
	description: "Check that CloudSQL Database Instance doesn't have public IP.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			if (settings) {
				const publicIp = settings.ipConfiguration.ipv4Enabled
				if (publicIp) {
					reportViolation(
						'CloudSQL Database Instance should be assigned private IPs only.'
					)
				}
			}
		}
	}
}
