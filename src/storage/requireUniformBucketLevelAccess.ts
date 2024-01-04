import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireUniformBucketLevelAccess = {
	name: 'storage-require-uniform-bucket-level',
	description: 'Check that Storage Bucket has uniform bucket-level access enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:storage/bucket:Bucket') {
			const uniformBucketLevelAccess = args.props.uniformBucketLevelAccess
			if (!uniformBucketLevelAccess) {
				reportViolation('Storage Bucket should have uniform bucket-level access enabled.')
			}
		}
	}
}
