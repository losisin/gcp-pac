import * as gcp from '@pulumi/gcp'

export const storageBucket = new gcp.storage.Bucket('fail#1', {
	name: 'my-bucket',
	location: 'europe-west1'
})
