import { disallowEndOfLifeRuntime } from './disallowEndOfLifeRuntime'
import { disallowEnvsSecrets } from './disallowEnvsSecrets'
import { disallowPublicIngress } from './disallowPublicIngress'
import { disallowVpcConnectorPublicEgress } from './disallowVpcConnectorPublicEgress'
import { requireCmek } from './requireCmek'

export const cloudfunctionsv2Policies = [
	disallowEndOfLifeRuntime,
	disallowEnvsSecrets,
	disallowPublicIngress,
	disallowVpcConnectorPublicEgress,
	requireCmek
]
