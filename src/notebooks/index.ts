import { disallowDefaultNetwork } from './disallowDefaultNetwork'
import { requireInstanceCmek } from './requireInstanceCmek'
import { requireNoPublicIp } from './requireNoPublicIp'

export const notebooksPolicies = [disallowDefaultNetwork, requireInstanceCmek, requireNoPublicIp]
