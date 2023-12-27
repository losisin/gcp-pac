import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowPublicIngress = {
	name: "cloudrunfunctions-function-disallow-public-ingress",
	description: "Check that CloudFunctions function doesn't allow public ingress from 'all'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudfunctions/function:Function") {
            const ingress = args.props.ingressSettings;
			const trigger = args.props.triggerHttp;
            if (trigger && ingress === "ALLOW_ALL") {
                reportViolation(
                    "CloudFunctions function should not allow public ingress from 'all'. Use a load balancer instead."
                );
            }
		}
	},
}
