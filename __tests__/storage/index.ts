import * as gcp from '@pulumi/gcp'

export const storageBucket1 = new gcp.storage.Bucket('fail#1', {
	name: 'my-bucket',
	location: 'europe-west1',
	publicAccessPrevention: 'enforced',
	uniformBucketLevelAccess: true,
	encryption: {
		defaultKmsKeyName: 'my-key'
	},
	logging: {
		logBucket: 'my-bucket',
		logObjectPrefix: 'prefix'
	}
})

export const storageBucket2 = new gcp.storage.Bucket('fail#2', {
	name: 'my-bucket',
	location: 'europe-west1',
	hierarchicalNamespace: {
		enabled: true
	}
})
