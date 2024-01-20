import * as gcp from '@pulumi/gcp'

export const backendService = new gcp.compute.BackendService('fail1', {
	name: 'fail1',
	logConfig: {
		enable: false
	},
	enableCdn: false
})

const firewall = new gcp.compute.Firewall('fail1', {
	allows: [
		{
			ports: [
				'20', // FTP
				'21', // FTP
				'22', // SSH
				'25', // SMTP
				'53', // DNS
				'135', // RPC
				'1521', // Oracle Database
				'3306', // MySQL
				'3389', // RDP
				'5432', // PostgreSQL
				'1433', // Microsoft SQL Server
				'1000-2000'
			],
			protocol: 'tcp'
		},
		{
			protocol: 'icmp'
		}
	],
	network: 'default',
	sourceRanges: ['0.0.0.0/0']
})

export const computeInstance = new gcp.compute.Instance('fail1', {
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
	},
	confidentialInstanceConfig: {
		enableConfidentialCompute: false
	}
})

export const disk = new gcp.compute.Disk('fail1', {
	type: 'pd-ssd',
	zone: 'europe-west1-a',
	physicalBlockSizeBytes: 4096
})

export const projectMetadata = new gcp.compute.ProjectMetadata('fail1', {
	metadata: {
		foo: 'bar'
	}
})

export const sslPolicy = new gcp.compute.SSLPolicy('fail1', {
	minTlsVersion: 'TLS_1_1',
	profile: 'CUSTOM',
	customFeatures: [
		'TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384',
		'TLS_RSA_WITH_AES_128_GCM_SHA256',
		'TLS_RSA_WITH_AES_256_CBC_SHA'
	]
})
