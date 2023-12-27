import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowEnvsSecrets = {
	name: "cloudrunfunctionsv2-function-disallow-envs-secrets",
	description: "Check that CloudFunctions function does not use environment variables from secrets.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudfunctionsv2/function:Function") {
            const secret = args.props.serviceConfig?.secretEnvironmentVariables;
            if (secret && secret.length > 0) {
                reportViolation(
                    "CloudFunctions function should use secrets as mounted volumes."
                );
            }
		}
	},
}
