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
	masterAuthorizedNetworksConfig: {
		cidrBlocks: [
			{
				cidrBlock: '0.0.0.0/0'
			}
		]
	},
	confidentialNodes: {
		enabled: false
	},
	nodePools: [
		{
			nodeConfig: {
				machineType: 'n1-standard-1',
				confidentialNodes: {
					enabled: false
				}
			},
			management: {
				autoRepair: false,
				autoUpgrade: false
			}
		}
	]
})

export const containerNodePool = new gcp.container.NodePool('fail#1', {
	location: 'europe-west1',
	nodeCount: 1,
	cluster: containerCluster.id,
	management: {
		autoRepair: false,
		autoUpgrade: false
	},
	nodeConfig: {
		machineType: 'n1-standard-1',
		confidentialNodes: {
			enabled: false
		}
	}
})

const registry = new gcp.container.Registry('registry', {
	location: 'EU',
	project: 'my-project'
})
