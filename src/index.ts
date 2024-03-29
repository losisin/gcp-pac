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
import { datafusionPolicies } from './datafusion'
import { dataprocPolicies } from './dataproc'
import { dnsPolicies } from './dns'
import { folderPolicies } from './folder'
import { kmsPolicies } from './kms'
import { memcachePolicies } from './memcache'
import { organizationsPolicies } from './organizations'
import { pubsubPolicies } from './pubsub'
import { projectsPolicies } from './projects'
import { redisPolicies } from './redis'
import { serviceaccountPolicies } from './serviceaccount'
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
	...datafusionPolicies,
	...dataprocPolicies,
	...dnsPolicies,
	...folderPolicies,
	...kmsPolicies,
	...memcachePolicies,
	...organizationsPolicies,
	...pubsubPolicies,
	...projectsPolicies,
	...redisPolicies,
	...serviceaccountPolicies,
	...spannerPolicies,
	...sqlPolicies,
	...storagePolicies,
	...vertexPolicies
]

export const policies = new PolicyPack('gcp-pac', {
	policies: allPolicies
})
