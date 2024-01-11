import { requireBlockProjectSSHKeys } from './requireBlockProjectSSHKeys'
import { requireOsLogin } from './requireOsLogin'

export const instancePolicies = [requireOsLogin, requireBlockProjectSSHKeys]
