import * as gcp from '@pulumi/gcp'

export const backendService = new gcp.compute.BackendService('fail#1', {
	name: 'fail1',
	loadBalancingScheme: 'EXTERNAL'
})

export const computeInstance = new gcp.compute.Instance('fail#1', {
	machineType: 'n2-standard-2',
	zone: 'europe-west1-b',
	bootDisk: {
		initializeParams: {
			image: 'debian-cloud/debian-11'
		}
	},
	networkInterfaces: [
		{
			network: 'default'
		}
	],
	metadata: {
		'block-project-ssh-keys': 'false',
		'enable-oslogin': 'false'
	}
})
