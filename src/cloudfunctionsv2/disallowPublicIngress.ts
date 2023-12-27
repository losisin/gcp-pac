import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowPublicIngress = {
	name: "cloudrunfunctionsv2-function-disallow-public-ingress",
	description: "Check that CloudFunctions function doesn't allow public ingress from 'all'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudfunctionsv2/function:Function") {
            const ingress = args.props.serviceConfig?.ingressSettings;
            if (ingress && ingress === "ALLOW_ALL") {
                reportViolation(
                    "CloudFunctions function should not allow public ingress from 'all'. Use a load balancer instead."
                );
            }
		}
	},
}
