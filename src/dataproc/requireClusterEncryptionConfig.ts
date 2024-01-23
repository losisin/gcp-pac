import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireClusterEncryptionConfig = {
	name: 'dataproc-cluster-require-encryption-config',
	description: 'Check that Dataproc Cluster is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:dataproc/cluster:Cluster') {
			const encryptionConfig = args.props.clusterConfig?.encryptionConfig
			if (!encryptionConfig?.kmsKeyName) {
				reportViolation(
					'Dataproc Cluster should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
