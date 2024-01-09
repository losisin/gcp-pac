import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableNetworkPolicy = {
	name: 'container-cluster-network-policy',
	description: 'Check that GKE Cluster have network policy enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const networkPolicy = args.props.networkPolicy
			const datapathProvider = args.props.datapathProvider
			const message = 'GKE Nodes should restrict traffic among pods with a network policy.'
			if (networkPolicy && !networkPolicy.enabled) {
				reportViolation(message)
			} else if (!networkPolicy && datapathProvider !== 'ADVANCED_DATAPATH') {
				reportViolation(message)
			}
		}
	}
}
