import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireHighAvailabilityTier = {
	name: 'redis-instance-require-high-availability-tier',
	description: 'Check that Redis Instance is not standalone instance.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/instance:Instance') {
			const tier = args.props.tier
			if (!tier || tier === 'BASIC') {
				reportViolation('Redis Instance should have STANDARD_HA tier.')
			}
		}
	}
}
