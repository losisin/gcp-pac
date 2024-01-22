import { requireDeletionProtection } from './requireDeletionProtection'
import { requireInstanceCmek } from './requireInstanceCmek'

export const bigtablePolicies = [requireDeletionProtection, requireInstanceCmek]
