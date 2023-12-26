import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowPublicIngress = {
	name: "cloudrunv2-disallow-public-ingress",
	description: "Check that CloudRun2 services do not have public ingress set to 'all'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudrunv2/service:Service") {
			const ingress = args.props.ingress;
			if (ingress && ingress === "INGRESS_TRAFFIC_ALL") {
				reportViolation(
					"CloudRun2 services should not have public ingress set to 'all'. Use a load balancer instead."
				);
			}
		}
	},
}
