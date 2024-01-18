import { backendservicePolicies } from './backendservice'
import { diskPolicies } from './disk'
import { instancePolicies } from './instance'
import { projectMetadataPolicies } from './projectMetadata'
import { sslPolicies } from './sslPolicy'

export const computePolicies = [
	...backendservicePolicies,
	...diskPolicies,
	...instancePolicies,
	...projectMetadataPolicies,
	...sslPolicies
]
