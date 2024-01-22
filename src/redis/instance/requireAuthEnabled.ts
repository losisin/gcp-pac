import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireAuthEnabled = {
	name: 'redis-instance-require-auth-enabled',
	description: 'Check that Redis Instance authentication is not disabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/instance:Instance') {
			const authEnabled = args.props.authEnabled
			if (!authEnabled) {
				reportViolation('Redis Instance should have authEnabled set to true.')
			}
		}
	}
}
