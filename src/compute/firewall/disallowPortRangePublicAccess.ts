import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowPortRangePublicAccess = {
	name: 'compute-firewall-disallow-port-range-public-access',
	description: "Check that Firewall doesn't allow unrestricted access to port ranges.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/firewall:Firewall') {
			const sourceRanges = args.props.sourceRanges
			const allows = args.props.allows
			if (sourceRanges && sourceRanges.includes('0.0.0.0/0')) {
				for (const rule of allows) {
					const ports = rule.ports
					if (ports && ports.some((port: string) => port.includes('-'))) {
						reportViolation('Firewall rule should allow access only to specific ports.')
					}
				}
			}
		}
	}
}
