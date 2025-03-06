import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireBucketVersioning = {
	name: 'storage-require-bucket-versioning',
	description: 'Check that Storage Bucket has versioning enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:storage/bucket:Bucket') {
			const versioning = args.props.versioning
			const hierarchicalNamespace = args.props.hierarchicalNamespace?.enabled
			if (!hierarchicalNamespace && (!versioning || !versioning.enabled)) {
				reportViolation('Storage Bucket should have versioning enabled.')
			}
		}
	}
}
