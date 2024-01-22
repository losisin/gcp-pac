import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowDefaultNetwork = {
	name: 'redis-instance-disallow-default-network',
	description: 'Check that Redis Instance is not created in default VPC network.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/instance:Instance') {
			const authorizedNetwork = args.props.authorizedNetwork
			if (authorizedNetwork === 'default' || authorizedNetwork.endsWith('/default')) {
				reportViolation('Redis Instance should be created in custom VPC network.')
			}
		}
	}
}
