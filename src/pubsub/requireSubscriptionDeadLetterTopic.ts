import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireSubscriptionDeadLetterTopic = {
	name: 'pubsub-require-subscription-dead-letter-topic',
	description: 'Check that Pub/Sub Subscription has dead-letter topic set.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:pubsub/subscription:Subscription') {
			const deadLetterPolicy = args.props.deadLetterPolicy
			if (!deadLetterPolicy?.deadLetterTopic) {
				reportViolation("Pub/Sub Subscription should have 'deadLetterPolicy' configured.")
			}
		}
	}
}
