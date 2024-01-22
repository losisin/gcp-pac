import { clusterPolicies } from './cluster'
import { instancePolicies } from './instance'

export const redisPolicies = [...clusterPolicies, ...instancePolicies]
