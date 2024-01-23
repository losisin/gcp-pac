import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireMetastoreServiceEncryptionConfig = {
	name: 'dataproc-metastore-service-require-encryption-config',
	description: 'Check that Dataproc Metastore Service is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:dataproc/cluster:Cluster') {
			const encryptionConfig = args.props.encryptionConfig
			if (!encryptionConfig?.kmsKeyName) {
				reportViolation(
					'Dataproc Metastore Service should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
