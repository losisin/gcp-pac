import { disallowPublicIngress } from "./disallowPublicIngress";
import { disallowEnvsSecrets } from "./disallowEnvsSecrets";

export const cloudrunPolicies = [
	disallowEnvsSecrets,
	disallowPublicIngress,
];
