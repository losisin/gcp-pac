import { requireClusterEncryptionConfig } from './requireClusterEncryptionConfig'
import { requireClusterInternalIpOnly } from './requireClusterInternalIpOnly'
import { requireMetastoreServiceEncryptionConfig } from './requireMetastoreServiceEncryptionConfig'

export const dataprocPolicies = [
	requireClusterEncryptionConfig,
	requireClusterInternalIpOnly,
	requireMetastoreServiceEncryptionConfig
]
