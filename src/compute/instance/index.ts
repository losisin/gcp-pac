import { disallowDefaultServiceAccount } from './disallowDefaultServiceAccount'
import { disallowExternalIp } from './disallowExternalIp'
import { disallowIpForward } from './disallowIpForward'
import { disallowSerialPortEnable } from './disallowSerialPortEnable'
import { requireBlockProjectSSHKeys } from './requireBlockProjectSSHKeys'
import { requireDeletionProtection } from './requireDeletionProtection'
import { requireShieldedInstanceConfig } from './requireShieldedInstanceConfig'

export const instancePolicies = [
	disallowDefaultServiceAccount,
	disallowExternalIp,
	disallowIpForward,
	disallowSerialPortEnable,
	requireBlockProjectSSHKeys,
	requireDeletionProtection,
	requireShieldedInstanceConfig
]
