import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireWorkloadIdentityConfig = {
	name: 'container-cluster-workload-identity-config',
	description: 'Check that GKE Cluster has workload identity configured.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const workloadIdentity = args.props.workloadIdentityConfig
			if (!workloadIdentity?.workloadPool) {
				reportViolation(
					'GKE Cluster should have workload pool to attach all Kubernetes service accounts to.'
				)
			}
		}
	}
}
