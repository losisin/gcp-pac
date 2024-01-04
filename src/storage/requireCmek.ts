import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireCmek = {
	name: 'storage-require-cmek',
	description: 'Check that Storage Bucket is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:storage/bucket:Bucket') {
			const encryption = args.props.encryption
			if (!encryption || !encryption.defaultKmsKeyName) {
				reportViolation(
					'Storage Bucket should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
