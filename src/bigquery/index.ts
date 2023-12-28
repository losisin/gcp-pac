import { datasetDeletionProtection} from "./datasetDeletionProtection";
import { datasetDisallowPublicAccess } from "./datasetDisallowPublicAccess";
import { datasetRequireCmek } from "./datasetRequireCmek";
import { tableDeletionProtection } from "./tableDeletionProtection";
import { tableDisallowPublicAccess } from "./tableDisallowPublicAccess";
import { tableRequireCmek } from "./tableRequireCmek";

export const bigqueryPolicies = [
	datasetDeletionProtection,
	datasetDisallowPublicAccess,
	datasetRequireCmek,
	tableDeletionProtection,
	tableDisallowPublicAccess,
	tableRequireCmek,
];
