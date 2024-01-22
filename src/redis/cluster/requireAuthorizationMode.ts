import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireAuthorizationMode = {
	name: 'redis-cluster-require-authorization-mode',
	description: 'Check that Redis Cluster has authorization mode enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/cluster:Cluster') {
			const authorizationMode = args.props.authorizationMode
			if (authorizationMode !== 'AUTH_MODE_IAM_AUTH') {
				reportViolation(
					'Redis Cluster should have authorizationMode set to AUTH_MODE_IAM_AUTH.'
				)
			}
		}
	}
}
