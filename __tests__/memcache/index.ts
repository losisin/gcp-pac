import * as gcp from '@pulumi/gcp'

export const memcache = new gcp.memcache.Instance('fail1', {
	nodeCount: 1,
	nodeConfig: {
		cpuCount: 1,
		memorySizeMb: 1024
	},
	memcacheVersion: 'MEMCACHE_1_5',
	authorizedNetwork: 'projects/123456789/global/networks/default'
})
