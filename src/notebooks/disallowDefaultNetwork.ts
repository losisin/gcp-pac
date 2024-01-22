import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowDefaultNetwork = {
	name: 'notebooks-instance-disallow-default-network',
	description: 'Check that Notebooks Instance is not created in default VPC network.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:notebooks/instance:Instance') {
			const network = args.props.network
			if (network && (network === 'default' || network.endsWith('/default'))) {
				reportViolation('Notebooks Instance should be created in custom VPC network.')
			}
		}
	}
}
