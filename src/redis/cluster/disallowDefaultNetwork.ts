import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowDefaultNetwork = {
	name: 'redis-cluster-disallow-default-network',
	description: 'Check that Redis Cluster is not created in default VPC network.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/cluster:Cluster') {
			const pscConfigs = args.props.pscConfigs
			if (pscConfigs.some((psc: any) => psc.network.endsWith('/default'))) {
				reportViolation('Redis Cluster should be created in custom VPC network.')
			}
		}
	}
}
