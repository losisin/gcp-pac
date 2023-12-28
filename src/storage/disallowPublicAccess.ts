import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowPublicAccess = {
	name: "storage-disallow-public-access",
	description: "Check that Storage Bucket enforces public access access.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:storage/bucket:Bucket") {
			const publicAccessPrevention = args.props.publicAccessPrevention;
			if (publicAccessPrevention !== "enforced") {
				reportViolation(
					"Storage Bucket should have public access prevention set to 'enforced'."
				);
			}
		}
	}
}
