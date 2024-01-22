import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireCleanupPolicy = {
	name: 'artifactregistry-repository-require-cleanup-policy',
	description: 'Check that Artifact Registry Repository has cleanup policies configured.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:artifactregistry/repository:Repository') {
			const cleanupPolicies = args.props.cleanupPolicies
			if (!cleanupPolicies || cleanupPolicies.length === 0) {
				reportViolation(
					'Artifact Registry Repository should have at least 1 cleanupPolicy configured.'
				)
			}
		}
	}
}
