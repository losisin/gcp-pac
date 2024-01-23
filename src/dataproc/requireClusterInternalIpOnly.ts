import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireClusterInternalIpOnly = {
	name: 'dataproc-cluster-require-internal-ip-only',
	description: 'Check that Dataproc Cluster instances have internal IP only.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:dataproc/cluster:Cluster') {
			const gceClusterConfig = args.props.clusterConfig?.gceClusterConfig
			if (!gceClusterConfig?.internalIpOnly) {
				reportViolation('Dataproc Cluster instances should not have ephemeral external IP.')
			}
		}
	}
}
