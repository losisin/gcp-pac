import { backendservicePolicies } from './backendservice'
import { diskPolicies } from './disk'
import { instancePolicies } from './instance'
import { projectMetadataPolicies } from './projectMetadata'

export const computePolicies = [
	...backendservicePolicies,
	...diskPolicies,
	...instancePolicies,
	...projectMetadataPolicies
]
