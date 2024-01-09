import * as gcp from '@pulumi/gcp'

export const containerCluster = new gcp.container.Cluster('fail#1', {
	name: 'fail-1',
	location: 'europe-west1',
	removeDefaultNodePool: false,
	nodeConfig: {
		machineType: 'n1-standard-1'
	},
	initialNodeCount: 1,
	enableShieldedNodes: false,
	privateClusterConfig: {
		enablePrivateNodes: false
	},
	masterAuthorizedNetworksConfig: {
		cidrBlocks: [
			{
				cidrBlock: '0.0.0.0/0'
			}
		]
	},
	databaseEncryption: {
		state: 'DECRYPTED'
	},
	confidentialNodes: {
		enabled: false
	},
	nodePools: [
		{
			nodeConfig: {
				imageType: 'UBUNTU_CONTAINERD',
				machineType: 'n1-standard-1',
				confidentialNodes: {
					enabled: false
				},
				shieldedInstanceConfig: {
					enableIntegrityMonitoring: false,
					enableSecureBoot: false
				}
			},
			management: {
				autoRepair: false,
				autoUpgrade: false
			}
		}
	],
	loggingService: 'none',
	monitoringService: 'none',
	enableLegacyAbac: true,
	masterAuth: {
		clientCertificateConfig: {
			issueClientCertificate: true
		}
	},
	networkPolicy: {
		enabled: false
	}
})

export const containerClusterAutoscale = new gcp.container.Cluster('fail#2', {
	name: 'fail-1',
	location: 'europe-west1',
	removeDefaultNodePool: true,
	initialNodeCount: 1,
	enableShieldedNodes: true,
	privateClusterConfig: {
		enablePrivateEndpoint: true,
		enablePrivateNodes: true
	},
	masterAuthorizedNetworksConfig: {},
	confidentialNodes: {
		enabled: true
	},
	databaseEncryption: {
		state: 'ENCRYPTED',
		keyName: 'projects/my-project/locations/europe-west1/keyRings/my-keyring/cryptoKeys/my-key'
	},
	clusterAutoscaling: {
		enabled: true,
		autoProvisioningDefaults: {
			imageType: 'UBUNTU_CONTAINERD',
			management: {
				autoRepair: false,
				autoUpgrade: false
			},
			shieldedInstanceConfig: {
				enableIntegrityMonitoring: false,
				enableSecureBoot: false
			}
		}
	},
	binaryAuthorization: {
		evaluationMode: 'PROJECT_SINGLETON_POLICY_ENFORCE'
	},
	workloadIdentityConfig: {
		workloadPool: 'my-project.svc.id.goog'
	},
	datapathProvider: 'ADVANCED_DATAPATH',
})

export const containerNodePool = new gcp.container.NodePool('fail#1', {
	location: 'europe-west1',
	nodeCount: 1,
	cluster: containerCluster.id,
	management: {
		autoRepair: false,
		autoUpgrade: true
	},
	nodeConfig: {
		imageType: 'UBUNTU_CONTAINERD',
		machineType: 'n1-standard-1',
		confidentialNodes: {
			enabled: false
		},
		shieldedInstanceConfig: {
			enableIntegrityMonitoring: false,
			enableSecureBoot: false
		}
	}
})

const registry = new gcp.container.Registry('registry', {
	location: 'EU',
	project: 'my-project'
})
