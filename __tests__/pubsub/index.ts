import * as gcp from '@pulumi/gcp'

export const pubsubTopic = new gcp.pubsub.Topic('fail1', {})

export const pubsubSubscription = new gcp.pubsub.Subscription('fail1', {
	topic: pubsubTopic.id,
	deadLetterPolicy: {}
})
