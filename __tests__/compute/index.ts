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
			network: 'default',
			accessConfigs: [{}]
		}
	],
	metadata: {
		'block-project-ssh-keys': 'false',
		'serial-port-enable': 'TRUE'
	},
	canIpForward: true,
	deletionProtection: false,
	serviceAccount: {
		email: '0123456789-compute@developer.gserviceaccount.com',
		scopes: ['cloud-platform', 'https://www.googleapis.com/auth/cloud-platform']
	},
	shieldedInstanceConfig: {
		enableIntegrityMonitoring: false,
		enableVtpm: false
	}
})

export const projectMetadata = new gcp.compute.ProjectMetadata('fail#1', {
	metadata: {
		foo: 'bar'
	}
})
