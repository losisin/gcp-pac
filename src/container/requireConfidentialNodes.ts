import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireConfidentialNodes = {
	name: 'container-cluster-confidential-nodes',
	description: 'Check that GKE Cluster has confidential nodes enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message =
			'GKE Cluster should have confidential nodes enabled to enforce encryption of data.'
		if (args.type === 'gcp:container/cluster:Cluster') {
			const clusterConfidentialNodes = args.props.confidentialNodes
			const nodePools = args.props.nodePools
			if (!clusterConfidentialNodes.enabled) {
				reportViolation(message)
			} else if (nodePools) {
				nodePools.forEach((np: any) => {
					if (!np.nodeConfig?.confidentialNodes.enabled) {
						reportViolation(message)
					}
				})
			}
		}
		if (args.type === 'gcp:container/nodePool:NodePool') {
			const nodePoolConfidentialNodes = args.props.nodeConfig
			if (!nodePoolConfidentialNodes?.confidentialNodes.enabled) {
				reportViolation(message)
			}
		}
	}
}
