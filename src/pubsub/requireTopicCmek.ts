import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireTopicCmek = {
	name: 'pubsub-require-topic-cmek',
	description: 'Check that Pub/Sub Topic is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:pubsub/topic:Topic') {
			const kmsKeyName = args.props.kmsKeyName
			if (!kmsKeyName) {
				reportViolation(
					'Pub/Sub messages should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
