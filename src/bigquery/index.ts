import { datasetDisallowPublicAccess } from './datasetDisallowPublicAccess'
import { datasetRequireCmek } from './datasetRequireCmek'
import { datasetRequireDeletionProtection } from './datasetRequireDeletionProtection'
import { tableRequireDeletionProtection } from './tableRequireDeletionProtection'
import { tableDisallowPublicAccess } from './tableDisallowPublicAccess'
import { tableRequireCmek } from './tableRequireCmek'

export const bigqueryPolicies = [
	datasetDisallowPublicAccess,
	datasetRequireCmek,
	datasetRequireDeletionProtection,
	tableDisallowPublicAccess,
	tableRequireCmek,
	tableRequireDeletionProtection
]
