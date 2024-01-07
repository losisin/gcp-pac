import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableIntegrityMonitoring = {
	name: 'container-cluster-enable-integrity-monitoring',
	description: 'Check that GKE Nodes have integrity monitoring enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = "GKE Nodes should have 'enableIntegrityMonitoring' set to true."
		if (args.type === 'gcp:container/cluster:Cluster') {
			const autoscaling = args.props.clusterAutoscaling
			const nodePools = args.props.nodePools
			if (
				autoscaling?.enabled &&
				!autoscaling?.autoProvisioningDefaults?.shieldedInstanceConfig
					?.enableIntegrityMonitoring
			) {
				reportViolation(message)
			} else if (nodePools) {
				nodePools.forEach((np: any) => {
					if (!np.nodeConfig?.shieldedInstanceConfig?.enableIntegrityMonitoring) {
						reportViolation(message)
					}
				})
			}
		}
		if (args.type === 'gcp:container/nodePool:NodePool') {
			const nodeConfig = args.props.nodeConfig
			if (!nodeConfig?.shieldedInstanceConfig?.enableIntegrityMonitoring) {
				reportViolation(message)
			}
		}
	}
}
