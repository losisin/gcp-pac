import { disallowPublicIngress } from './disallowPublicIngress'
import { serviceDisallowEnvsSecrets, jobDisallowEnvsSecrets } from './disallowEnvsSecrets'
import {
	serviceRequireDeletionProtection,
	jobRequireDeletionProtection
} from './requireDeletionProtection'

export const cloudrunv2Policies = [
	serviceDisallowEnvsSecrets,
	jobDisallowEnvsSecrets,
	disallowPublicIngress,
	serviceRequireDeletionProtection,
	jobRequireDeletionProtection
]
