import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnablePrivateEndpoint = {
	name: 'container-cluster-enable-private-endpoint',
	description: 'Check that GKE CLuster has private endpoint enbled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const privateCluster = args.props.privateClusterConfig
			if (!privateCluster?.enablePrivateEndpoint) {
				reportViolation("GKE Nodes should have 'enablePrivateEndpoint' set to true")
			}
		}
	}
}
