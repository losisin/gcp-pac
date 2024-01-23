import * as gcp from '@pulumi/gcp'

export const dataprocCluster = new gcp.dataproc.Cluster('fail1', {
	region: 'europe-west1',
	clusterConfig: {
		encryptionConfig: {
			kmsKeyName: ''
		},
		gceClusterConfig: {
			internalIpOnly: false
		}
	}
})

export const dataprocMetastoreService = new gcp.dataproc.MetastoreService('fail1', {
	serviceId: 'my-service',
	location: 'europe-west1',
	encryptionConfig: {
		kmsKey: ''
	}
})
