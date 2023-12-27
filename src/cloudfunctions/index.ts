// import { disallowEndOfLifeRuntime } from "./disallowEndOfLifeRuntime";
import { disallowEnvsSecrets } from "./disallowEnvsSecrets";
import { disallowPublicIngress } from "./disallowPublicIngress";
// import { requireCmek } from "./requireCmek";

export const cloudfunctionsPolicies = [
    // disallowEndOfLifeRuntime,
	disallowEnvsSecrets,
	disallowPublicIngress,
    // requireCmek,
];
