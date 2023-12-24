import { PolicyPack } from '@pulumi/policy'
import { cloudRunPolicies } from './cloudrun'
import { computePolicies } from './compute'

const allPolicies = [...cloudRunPolicies, ...computePolicies]

export const policies = new PolicyPack('gcp', {
  policies: allPolicies
})
