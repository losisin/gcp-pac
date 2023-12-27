// import { disallowEndOfLifeRuntime } from "./disallowEndOfLifeRuntime";
import { disallowEnvsSecrets } from "./disallowEnvsSecrets";
import { disallowPlainHttp } from "./disallowPlainHttp";
import { disallowPublicIngress } from "./disallowPublicIngress";
import { requireCmek } from "./requireCmek";

export const cloudfunctionsPolicies = [
    // disallowEndOfLifeRuntime,
	disallowEnvsSecrets,
	disallowPlainHttp,
	disallowPublicIngress,
    requireCmek,
];
