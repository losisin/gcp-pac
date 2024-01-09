import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireContainerOptimizedOs = {
	name: 'container-cluster-container-optimized-os',
	description: 'Check that GKE Nodes use Container-Optimized OS images.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = "GKE Nodes should have 'imageType' set to 'COS_CONTAINERD'."
		if (args.type === 'gcp:container/cluster:Cluster') {
			const autoscaling = args.props.clusterAutoscaling?.autoProvisioningDefaults
			const nodePools = args.props.nodePools
			if (autoscaling?.imageType && autoscaling?.imageType !== 'COS_CONTAINERD') {
				reportViolation(message)
			} else if (nodePools) {
				nodePools.forEach((np: any) => {
					if (np.nodeConfig?.imageType && np.nodeConfig?.imageType !== 'COS_CONTAINERD') {
						reportViolation(message)
					}
				})
			}
		}
		if (args.type === 'gcp:container/nodePool:NodePool') {
			const nodeConfig = args.props.nodeConfig
			if (nodeConfig.imageType && nodeConfig.imageType !== 'COS_CONTAINERD') {
				reportViolation(message)
			}
		}
	}
}
