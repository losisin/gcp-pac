import * as gcp from '@pulumi/gcp'

export const redisCluster = new gcp.redis.Cluster('fail1', {
	region: 'europe-west1',
	shardCount: 3,
	pscConfigs: [
		{
			network: 'projects/123456789/global/networks/default'
		}
	],
	transitEncryptionMode: 'TRANSIT_ENCRYPTION_MODE_DISABLED',
	authorizationMode: 'AUTH_MODE_DISABLED'
})

export const redisInstance = new gcp.redis.Instance('fail1', {
	memorySizeGb: 1,
	authEnabled: false,
	authorizedNetwork: 'projects/123456789/global/networks/default',
	customerManagedKey: '',
	redisVersion: 'REDIS_5_0',
	tier: 'BASIC',
	transitEncryptionMode: 'DISABLED'
})
