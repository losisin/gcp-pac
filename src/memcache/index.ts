import { disallowDefaultNetwork } from './disallowDefaultNetwork'
import { disallowEndOfLife } from './disallowEndOfLife'
import { requireNodeCount } from './requireNodeCount'

export const memcachePolicies = [disallowDefaultNetwork, disallowEndOfLife, requireNodeCount]
