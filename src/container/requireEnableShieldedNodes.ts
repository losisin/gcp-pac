import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableShieldedNodes = {
	name: 'container-cluster-require-shielded-nodes',
	description: 'Check that GKE Cluster has shilded nodes enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const enableShieldedNodes = args.props.enableShieldedNodes
			if (!enableShieldedNodes) {
				reportViolation('Ensure that GKE Cluster has enableShieldedNodes is set to true.')
			}
		}
	}
}
