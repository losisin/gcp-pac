import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowProtocolPublicAccess = {
	name: 'compute-firewall-disallow-protocol-public-access',
	description: "Check that Firewall doesn't allow unrestricted access to protocol.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/firewall:Firewall') {
			const sourceRanges = args.props.sourceRanges
			const allows = args.props.allows
			if (sourceRanges && sourceRanges.includes('0.0.0.0/0')) {
				for (const rule of allows) {
					const ports = rule.ports
					const protocol = rule.protocol
					if (!ports?.length) {
						reportViolation(
							`Firewall rule should not allow unrestricted access to all ports for protocol ${protocol}.`
						)
					}
				}
			}
		}
	}
}
