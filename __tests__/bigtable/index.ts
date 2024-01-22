import * as gcp from '@pulumi/gcp'

export const bigtableInstance = new gcp.bigtable.Instance('fail1', {
	deletionProtection: false,
	clusters: [
		{
			clusterId: 'my-cluster'
		}
	]
})
