import { requireLogConfig } from './requireLogConfig'
import { requireSecurityPolicy } from './requireSecurityPolicy'

export const backendservicePolicies = [requireSecurityPolicy, requireLogConfig]
