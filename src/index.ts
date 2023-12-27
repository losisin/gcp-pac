import { PolicyPack } from '@pulumi/policy'
import { cloudfunctionsPolicies } from './cloudfunctions'
import { cloudrunPolicies } from './cloudrun'
import { cloudrunv2Policies } from './cloudrunv2'
import { computePolicies } from './compute'

const allPolicies = [
    ...cloudfunctionsPolicies,
    ...cloudrunPolicies,
    ...cloudrunv2Policies,
    ...computePolicies
]

export const policies = new PolicyPack('gcp-pac', {
    policies: allPolicies
})
