import { disallowCommonPortsPublicAccess } from './disallowCommonPortsPublicAccess'
import { disallowDefaultNetwork } from './disallowDefaultNetwork'
import { disallowPortRangePublicAccess } from './disallowPortRangePublicAccess'
import { disallowProtocolPublicAccess } from './disallowProtocolPublicAccess'
import { requireLogConfig } from './requireLogConfig'

export const firewallPolicies = [
	disallowCommonPortsPublicAccess,
	disallowDefaultNetwork,
	disallowPortRangePublicAccess,
	disallowProtocolPublicAccess,
	requireLogConfig
]
