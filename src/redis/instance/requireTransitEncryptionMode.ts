import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireTransitEncryptionMode = {
	name: 'redis-instance-require-transit-encryption-mode',
	description: 'Check that Redis Instance has in-transit encryption enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/instance:Instance') {
			const transitEncryptionMode = args.props.transitEncryptionMode
			if (!transitEncryptionMode || transitEncryptionMode !== 'SERVER_AUTHENTICATION') {
				reportViolation(
					'Redis Instance should have transitEncryptionMode set to SERVER_AUTHENTICATION.'
				)
			}
		}
	}
}
