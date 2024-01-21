import { disallowDefaultServiceAccount } from './disallowDefaultServiceAccount'
import { disallowExternalIp } from './disallowExternalIp'
import { disallowIpForward } from './disallowIpForward'
import { disallowSerialPortEnable } from './disallowSerialPortEnable'
import { requireBlockProjectSSHKeys } from './requireBlockProjectSSHKeys'
import { requireBootDiskEncryption } from './requireBootDiskEncryption'
import { requireConfidentialInstanceConfig } from './requireConfidentialInstanceConfig'
import { requireDeletionProtection } from './requireDeletionProtection'
import { requireShieldedInstanceConfig } from './requireShieldedInstanceConfig'

export const instancePolicies = [
	disallowDefaultServiceAccount,
	disallowExternalIp,
	disallowIpForward,
	disallowSerialPortEnable,
	requireBlockProjectSSHKeys,
	requireBootDiskEncryption,
	requireConfidentialInstanceConfig,
	requireDeletionProtection,
	requireShieldedInstanceConfig
]
