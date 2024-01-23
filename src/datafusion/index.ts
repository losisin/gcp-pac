import { disallowDefaultNetwork } from './disallowDefaultNetwork'
import { requireCryptoKeyConfig } from './requireCryptoKeyConfig'
import { requireEnableRbac } from './requireEnableRbac'
import { requireEnableStackdriverLogging } from './requireEnableStackdriverLogging'
import { requireEnableStackdriverMonitoring } from './requireEnableStackdriverMonitoring'
import { requirePrivateInstance } from './requirePrivateInstance'

export const datafusionPolicies = [
	disallowDefaultNetwork,
	requireCryptoKeyConfig,
	requireEnableRbac,
	requireEnableStackdriverLogging,
	requireEnableStackdriverMonitoring,
	requirePrivateInstance
]
