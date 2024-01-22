import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowEndOfLife = {
	name: 'memcache-instance-disallow-end-of-life',
	description: 'Check that Memcached Instance does not use end-of-life version.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:memcache/instance:Instance') {
			const memcacheVersion = args.props.memcacheVersion
			// https://endoflife.date/memcached
			if (memcacheVersion && memcacheVersion !== 'MEMCACHE_1_6_15') {
				reportViolation(
					'Memcached Instance should use memcacheVersion with active support.'
				)
			}
		}
	}
}
