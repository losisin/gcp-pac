import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowDefaultNetwork = {
	name: 'compute-firewall-disallow-default-network',
	description: 'Check that Compute Firewall is not created in default VPC network.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/firewall:Firewall') {
			const network = args.props.network
			if (network === 'default' || network.endsWith('/default')) {
				reportViolation(
					'Compute Firewall rule should not be created in default VPC network.'
				)
			}
		}
	}
}
