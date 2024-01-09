import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireRemoveDefaultNodePool = {
	name: 'container-cluster-require-remove-default-node-pool',
	description: 'Check that GKE Cluster default node pool is not used.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const removeDefaultNodePool = args.props.removeDefaultNodePool
			const defaultNodePool = args.props.nodeConfig
			if (!removeDefaultNodePool || defaultNodePool) {
				reportViolation(
					"Default node pool should be removed from GKE Cluster and initialNodeCount set to at least '1'."
				)
			}
		}
	}
}
