import { PolicyPack } from '@pulumi/policy'
import { cloudfunctionsPolicies } from './cloudfunctions'
import { cloudfunctionsv2Policies } from './cloudfunctionsv2'
import { cloudrunPolicies } from './cloudrun'
import { cloudrunv2Policies } from './cloudrunv2'
import { computePolicies } from './compute'
import { storagePolicies } from './storage'

const allPolicies = [
    ...cloudfunctionsPolicies,
    ...cloudfunctionsv2Policies,
    ...cloudrunPolicies,
    ...cloudrunv2Policies,
    ...computePolicies,
    ...storagePolicies
]

export const policies = new PolicyPack('gcp-pac', {
    policies: allPolicies
})
