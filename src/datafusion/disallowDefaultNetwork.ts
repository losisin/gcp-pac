import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowDefaultNetwork = {
	name: 'datafusion-instance-disallow-default-network',
	description: 'Check that Datafusion Instance has RBAC enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:datafusion/instance:Instance') {
			const network = args.props.networkConfig?.network
			if (network === 'default' || network?.endsWith('/default')) {
				reportViolation('Datafusion Instance should granular role-based access control.')
			}
		}
	}
}
