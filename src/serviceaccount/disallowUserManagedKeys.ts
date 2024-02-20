import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowUserManagedKeys = {
	name: 'serviceaccount-disallow-user-managed-keys',
	description: 'Check that Service Account does not have user-managed key.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:serviceaccount/key:Key') {
			reportViolation('Service Account should use GCP-managed keys for authentication.')
		}
	}
}
