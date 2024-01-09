import { PolicyPack } from '@pulumi/policy'
import { bigqueryPolicies } from './bigquery'
import { cloudfunctionsPolicies } from './cloudfunctions'
import { cloudfunctionsv2Policies } from './cloudfunctionsv2'
import { cloudrunPolicies } from './cloudrun'
import { cloudrunv2Policies } from './cloudrunv2'
import { computePolicies } from './compute'
import { containerPolicies } from './container'
import { sqlPolicies } from './sql'
import { storagePolicies } from './storage'

const allPolicies = [
	...bigqueryPolicies,
	...cloudfunctionsPolicies,
	...cloudfunctionsv2Policies,
	...cloudrunPolicies,
	...cloudrunv2Policies,
	...computePolicies,
	...containerPolicies,
	...sqlPolicies,
	...storagePolicies
]

export const policies = new PolicyPack('gcp-pac', {
	policies: allPolicies
})
