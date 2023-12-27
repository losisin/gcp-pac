import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowPublicIngress = {
	name: "cloudrun-disallow-public-ingress",
	description: "Check that CloudRun services doesn't allow public ingress from 'all'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudrun/service:Service") {
			const annotations = args.props.metadata?.annotations;
			if (annotations && annotations["run.googleapis.com/ingress"] === "all") {
				reportViolation(
					"CloudRun services should not allow public ingress from 'all'. Use a load balancer instead."
				);
			}
		}
	},
}
