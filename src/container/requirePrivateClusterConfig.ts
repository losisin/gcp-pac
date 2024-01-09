import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requirePrivateClusterConfig = {
	name: 'container-cluster-private-cluster-config',
	description: 'Check that GKE Cluster is private.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const privateCluster = args.props.privateClusterConfig
			if (!privateCluster?.enablePrivateNodes) {
				reportViolation(
					"GKE Cluster should have enabled private cluster by setting 'enablePrivateNodes'."
				)
			}
		}
	}
}
