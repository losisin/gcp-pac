import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const cloudrunDisallowPublicIngress = {
	name: "cloudrun-disallow-public-ingress",
	description: "Check that CloudRun services do not have public ingress set to 'all'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudrun/service:Service") {
			const annotations = args.props.metadata?.annotations;
			if (annotations && annotations["run.googleapis.com/ingress"] === "all") {
				reportViolation(
					"CloudRun services should not have public ingress set to 'all'. Use a load balancer instead."
				);
			}
		}
	},
}
