import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireAutoRepairNodes = {
	name: 'container-cluster-autorepair-nodes',
	description: 'Check that GKE Nodes have auto-repair enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = "GKE Nodes should have 'autoRepair' set to true."
		if (args.type === 'gcp:container/cluster:Cluster') {
			const autoscaling = args.props.clusterAutoscaling
			const nodePools = args.props.nodePools
			if (
				autoscaling?.enabled &&
				!autoscaling?.autoProvisioningDefaults?.management?.autoRepair
			) {
				reportViolation(message)
			} else if (nodePools) {
				nodePools.forEach((np: any) => {
					if (!np.management?.autoRepair) {
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
