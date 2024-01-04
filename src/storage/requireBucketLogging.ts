import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireBucketLogging = {
	name: 'storage-require-bucket-logging',
	description: 'Check that Storage Bucket has logging enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:storage/bucket:Bucket') {
			const versioning = args.props.logging
			if (!versioning) {
				reportViolation('Storage Bucket should have logging enabled.')
			}
		}
	}
}
