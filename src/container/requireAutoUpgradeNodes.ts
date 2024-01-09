import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireAutoUpgradeNodes = {
	name: 'container-cluster-autoupgrade-nodes',
	description: 'Check that GKE Nodes have auto-upgrade enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = "GKE Nodes should have 'autoUpgrade' set to true."
		if (args.type === 'gcp:container/cluster:Cluster') {
			const autoscaling = args.props.clusterAutoscaling
			const nodePools = args.props.nodePools
			if (
				autoscaling?.enabled &&
				!autoscaling?.autoProvisioningDefaults?.management?.autoUpgrade
			) {
				reportViolation(message)
			} else if (nodePools) {
				nodePools.forEach((np: any) => {
					if (!np.management?.autoUpgrade) {
						reportViolation(message)
					}
				})
			}
		}
		if (args.type === 'gcp:container/nodePool:NodePool') {
			const nodeManagement = args.props.management
			if (!nodeManagement?.autoRepair) {
				reportViolation(message)
			}
		}
	}
}
