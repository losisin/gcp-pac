import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireBinaryAuthorization = {
	name: 'container-cluster-binary-authorization',
	description: 'Check that GKE Cluster has Binary Authorization enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const binaryAuthorization = args.props.binaryAuthorization
			if (binaryAuthorization?.evaluationMode !== 'PROJECT_SINGLETON_POLICY_ENFORCE') {
				reportViolation(
					"GKE Cluster should set 'binaryAuthorization.evaluationMode' set properly."
				)
			}
		}
	}
}
