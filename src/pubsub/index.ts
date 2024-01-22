import { requireSubscriptionDeadLetterTopic } from './requireSubscriptionDeadLetterTopic'
import { requireTopicCmek } from './requireTopicCmek'

export const pubsubPolicies = [requireSubscriptionDeadLetterTopic, requireTopicCmek]
