import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireTransitEncryptionMode = {
	name: 'redis-cluster-require-transit-encryption-mode',
	description: 'Check that Redis Cluster has in-transit encryption enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/cluster:Cluster') {
			const transitEncryptionMode = args.props.transitEncryptionMode
			if (
				!transitEncryptionMode ||
				transitEncryptionMode !== 'TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION'
			) {
				reportViolation(
					'Redis Cluster should have transitEncryptionMode set to TRANSIT_ENCRYPTION_MODE_SERVER_AUTHENTICATION.'
				)
			}
		}
	}
}
