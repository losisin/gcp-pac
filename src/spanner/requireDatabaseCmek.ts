import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseCmek = {
	name: 'spanner-database-require-customer-managed-key',
	description: 'Check that Spanner Database is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:spanner/database:Database') {
			const encryptionConfig = args.props.encryptionConfig
			if (!encryptionConfig?.kmsKeyName) {
				reportViolation(
					'Spanner Database should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
