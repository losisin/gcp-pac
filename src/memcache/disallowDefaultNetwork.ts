import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowDefaultNetwork = {
	name: 'memcache-instance-disallow-default-network',
	description: 'Check that Memcached Instance is not created in default VPC network.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:memcache/instance:Instance') {
			const authorizedNetwork = args.props.authorizedNetwork
			if (
				!authorizedNetwork ||
				authorizedNetwork === 'default' ||
				authorizedNetwork.endsWith('/default')
			) {
				reportViolation('Memcached Instance should be created in custom VPC network.')
			}
		}
	}
}
