import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireCmek = {
	name: 'sql-require-cmek',
	description: 'Check that Cloud SQL Database Instance is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const encryption = args.props.encryptionKeyName
			if (!encryption) {
				reportViolation(
					'Cloud SQL Database Instance should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
