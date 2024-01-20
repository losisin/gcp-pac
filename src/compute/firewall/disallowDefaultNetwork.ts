import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowDefaultNetwork = {
	name: 'compute-firewall-disallow-default-network',
	description: 'Check that Firewall is not created in default VPC network.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/firewall:Firewall') {
			const network = args.props.network
			if (network === 'default' || network.endsWith('/default')) {
				reportViolation('Firewall rule should not be created in default VPC network.')
			}
		}
	}
}
