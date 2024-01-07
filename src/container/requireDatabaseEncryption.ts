import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatabaseEncryption = {
	name: 'container-cluster-database-encryption',
	description: 'Check that GKE Cluster has Kubernetes secrets encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const databaseEncryption = args.props.databaseEncryption
			if (databaseEncryption?.state !== 'ENCRYPTED' && !databaseEncryption?.keyName) {
				reportViolation(
					'GKE Cluster should have Kubernetes secrets protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
