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
import { notebooksPolicies } from './notebooks'
import { pubsubPolicies } from './pubsub'
import { projectsPolicies } from './projects'
import { redisPolicies } from './redis'
import { spannerPolicies } from './spanner'
import { sqlPolicies } from './sql'
import { storagePolicies } from './storage'
import { vertexPolicies } from './vertex'

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
	...notebooksPolicies,
	...pubsubPolicies,
	...projectsPolicies,
	...redisPolicies,
	...spannerPolicies,
	...sqlPolicies,
	...storagePolicies,
	...vertexPolicies
]

export const policies = new PolicyPack('gcp-pac', {
	policies: allPolicies
})
