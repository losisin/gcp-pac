import { disallowPublicAccess } from "./disallowPublicAccess";
import { requireUniformBucketLevelAccess } from "./requireUniformBucketLevelAccess";
import { requireBucketVersioning } from "./requireBucketVersioning";

export const storagePolicies = [
	disallowPublicAccess,
	requireBucketVersioning,
	requireUniformBucketLevelAccess,
];
