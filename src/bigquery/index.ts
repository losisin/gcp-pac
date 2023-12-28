import { requireCmekDataset } from "./requireCmekDataset";
import { requireCmekTable } from "./requireCmekTable";

export const bigqueryPolicies = [
	requireCmekDataset,
	requireCmekTable,
];
