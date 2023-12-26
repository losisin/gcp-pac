import { PolicyPack } from '@pulumi/policy'
import { cloudrunPolicies } from './cloudrun'
import { cloudrunv2Policies } from './cloudrunv2'
import { computePolicies } from './compute'

const allPolicies = [
  ...cloudrunPolicies,
  ...cloudrunv2Policies,
  ...computePolicies
]

export const policies = new PolicyPack('gcp-pac', {
  policies: allPolicies
})
