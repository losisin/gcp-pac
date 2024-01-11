import { backendservicePolicies } from './backendservice'
import { instancePolicies } from './instance'

export const computePolicies = [...backendservicePolicies, ...instancePolicies]
