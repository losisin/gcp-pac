import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireNodeCount = {
	name: 'memcache-instance-require-node-count',
	description: 'Check that Memcached Instance is highly available.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:memcache/instance:Instance') {
			const nodeCount = args.props.nodeCount
			if (nodeCount && nodeCount < 3) {
				reportViolation(
					'Memcached Instance should have at least 3 nodes in case of node or zone failure.'
				)
			}
		}
	}
}
