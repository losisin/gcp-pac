import { requireEnableCdn } from './requireEnableCdn'
import { requireLogConfig } from './requireLogConfig'
import { requireSecurityPolicy } from './requireSecurityPolicy'

export const backendservicePolicies = [requireEnableCdn, requireSecurityPolicy, requireLogConfig]
