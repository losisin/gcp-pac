import { disallowIpForward } from './disallowIpForward'
import { disallowSerialPortEnable } from './disallowSerialPortEnable'
import { requireBlockProjectSSHKeys } from './requireBlockProjectSSHKeys'
import { requireDeletionProtection } from './requireDeletionProtection'

export const instancePolicies = [
	disallowIpForward,
	disallowSerialPortEnable,
	requireBlockProjectSSHKeys,
	requireDeletionProtection
]
