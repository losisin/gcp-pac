import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireCustomerManagedKey = {
	name: 'artifactregistry-repository-require-customer-managed-key',
	description: 'Check that Artifact Registry Repository is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:artifactregistry/repository:Repository') {
			const kmsKeyName = args.props.kmsKeyName
			if (!kmsKeyName) {
				reportViolation(
					'Artifact Registry Repository should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
