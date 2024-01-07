import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableSecureBoot = {
	name: 'container-cluster-enable-secure-boot',
	description: 'Check that GKE Nodes have secure boot enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = "GKE Nodes should have 'enableSecureBoot' set to true."
		if (args.type === 'gcp:container/cluster:Cluster') {
			const autoscaling = args.props.clusterAutoscaling
			const nodePools = args.props.nodePools
			if (
				autoscaling?.enabled &&
				!autoscaling?.autoProvisioningDefaults?.shieldedInstanceConfig?.enableSecureBoot
			) {
				reportViolation(message)
			} else if (nodePools) {
				nodePools.forEach((np: any) => {
					if (!np.nodeConfig?.shieldedInstanceConfig?.enableSecureBoot) {
						reportViolation(message)
					}
				})
			}
		}
		if (args.type === 'gcp:container/nodePool:NodePool') {
			const nodeConfig = args.props.nodeConfig
			if (!nodeConfig?.shieldedInstanceConfig?.enableSecureBoot) {
				reportViolation(message)
			}
		}
	}
}
