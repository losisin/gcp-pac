import { disallowPublicAccess } from './disallowPublicAccess'
import { disallowSelfBucketLogging } from './disallowSelfBucketLogging'
import { requireBucketLogging } from './requireBucketLogging'
import { requireBucketVersioning } from './requireBucketVersioning'
import { requireCmek } from './requireCmek'
import { requireUniformBucketLevelAccess } from './requireUniformBucketLevelAccess'

export const storagePolicies = [
	disallowPublicAccess,
	disallowSelfBucketLogging,
	requireBucketLogging,
	requireBucketVersioning,
	requireCmek,
	requireUniformBucketLevelAccess
]
