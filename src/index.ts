import { PolicyPack } from '@pulumi/policy'
import { artifactregistryPolicies } from './artifactregistry'
import { bigqueryPolicies } from './bigquery'
import { bigtablePolicies } from './bigtable'
import { cloudfunctionsPolicies } from './cloudfunctions'
import { cloudfunctionsv2Policies } from './cloudfunctionsv2'
import { cloudrunPolicies } from './cloudrun'
import { cloudrunv2Policies } from './cloudrunv2'
import { computePolicies } from './compute'
import { containerPolicies } from './container'
import { dnsPolicies } from './dns'
import { kmsPolicies } from './kms'
import { memcachePolicies } from './memcache'
import { pubsubPolicies } from './pubsub'
import { redisPolicies } from './redis'
import { spannerPolicies } from './spanner'
import { sqlPolicies } from './sql'
import { storagePolicies } from './storage'

const allPolicies = [
	...artifactregistryPolicies,
	...bigqueryPolicies,
	...bigtablePolicies,
	...cloudfunctionsPolicies,
	...cloudfunctionsv2Policies,
	...cloudrunPolicies,
	...cloudrunv2Policies,
	...computePolicies,
	...containerPolicies,
	...dnsPolicies,
	...kmsPolicies,
	...memcachePolicies,
	...pubsubPolicies,
	...redisPolicies,
	...spannerPolicies,
	...sqlPolicies,
	...storagePolicies
]

export const policies = new PolicyPack('gcp-pac', {
	policies: allPolicies
})
