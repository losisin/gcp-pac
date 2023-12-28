import { datasetDeletionProtection} from "./datasetDeletionProtection";
import { datasetRequireCmek } from "./datasetRequireCmek";
import { tableDeletionProtection } from "./tableDeletionProtection";
import { tableRequireCmek } from "./tableRequireCmek";

export const bigqueryPolicies = [
	datasetDeletionProtection,
	datasetRequireCmek,
	tableDeletionProtection,
	tableRequireCmek,
];
