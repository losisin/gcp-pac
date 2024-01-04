import { disallowPublicIngress } from './disallowPublicIngress'
import { serviceDisallowEnvsSecrets, jobDisallowEnvsSecrets } from './disallowEnvsSecrets'

export const cloudrunv2Policies = [
	serviceDisallowEnvsSecrets,
	jobDisallowEnvsSecrets,
	disallowPublicIngress
]
