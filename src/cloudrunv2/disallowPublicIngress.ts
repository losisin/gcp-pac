import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowPublicIngress = {
	name: "cloudrunv2-service-disallow-public-ingress",
	description: "Check that CloudRun2 services doesn't allow public ingress from 'all'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudrunv2/service:Service") {
			const ingress = args.props.ingress;
			if (ingress && ingress === "INGRESS_TRAFFIC_ALL") {
				reportViolation(
					"CloudRun2 services should not allow public ingress from 'all'. Use a load balancer instead."
				);
			}
		}
	},
}
