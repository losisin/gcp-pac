import { backendservicePolicies } from './backendservice'
import { diskPolicies } from './disk'
import { firewallPolicies } from './firewall'
import { instancePolicies } from './instance'
import { projectMetadataPolicies } from './projectMetadata'
import { sslPolicies } from './sslPolicy'
import { subnetworkPolicies } from './subnetwork'

export const computePolicies = [
	...backendservicePolicies,
	...diskPolicies,
	...firewallPolicies,
	...instancePolicies,
	...projectMetadataPolicies,
	...sslPolicies,
	...subnetworkPolicies
]
