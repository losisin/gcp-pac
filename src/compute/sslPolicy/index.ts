import { disallowProfileCompatible } from './disallowProfileCompatible'
import { disallowWeakChipherSuites } from './disallowWeakChipherSuites'
import { requireMinTlsVersion } from './requireMinTlsVersion'

export const sslPolicies = [
	disallowProfileCompatible,
	disallowWeakChipherSuites,
	requireMinTlsVersion
]
