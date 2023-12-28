import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowSelfBucketLogging = {
	name: "storage-disallow-self-bucket-logging",
	description: "Check that Storage Bucket doesn't log to itself.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:storage/bucket:Bucket") {
			const name = args.props.name;
			const logging = args.props.logging;
			if (logging && logging.logBucket === name) {
				reportViolation(
					"Storage Bucket should have logging enabled to different bucket."
				);
			}
		}
	}
}
