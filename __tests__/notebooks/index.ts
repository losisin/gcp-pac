import * as gcp from '@pulumi/gcp'

const notebooksInstance = new gcp.notebooks.Instance('fail1', {
	location: 'europe-west1-b',
	machineType: 'n1-standard-4',
	containerImage: {
		repository: 'gcr.io/deeplearning-platform-release/base-cpu',
		tag: 'latest'
	},
	noPublicIp: false,
	network: 'default',
	kmsKey: ''
})
