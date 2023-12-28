import { disallowPublicAccess } from "./disallowPublicAccess";
import { requireUniformBucketLevelAccess } from "./requireUniformBucketLevelAccess";

export const storagePolicies = [
	disallowPublicAccess,
	requireUniformBucketLevelAccess,
];
