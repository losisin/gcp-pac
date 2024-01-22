import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowEndOfLife = {
	name: 'redis-instance-disallow-end-of-life',
	description: 'Check that Redis Instance does not use end-of-life version.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/instance:Instance') {
			const redisVersion = args.props.redisVersion
			// https://endoflife.date/redis
			if (redisVersion && redisVersion !== 'REDIS_7_0') {
				reportViolation('Redis Instance should use redisVersion with active support.')
			}
		}
	}
}
