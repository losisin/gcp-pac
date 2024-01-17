import { backendservicePolicies } from './backendservice'
import { instancePolicies } from './instance'
import { projectMetadataPolicies } from './projectMetadata'

export const computePolicies = [
	...backendservicePolicies,
	...instancePolicies,
	...projectMetadataPolicies
]
