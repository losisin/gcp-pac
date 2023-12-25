import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const backendserviceRequireSecuritypolicy = {
	name: "backendservice-require-securitypolicy",
	description: "Check that Backend Service has a security policy set.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:compute/backendService:BackendService") {
			const loadBalancingScheme = args.props.loadBalancingScheme;
			const securityPolicy = args.props.securityPolicy;
			if (loadBalancingScheme !== "INTERNAL_SELF_MANAGED" && !securityPolicy ) {
				reportViolation(
					"Backendervice should have a security policy set unless unless scheme is INTERNAL_SELF_MANAGED."
				);
			}
		}
	},
}
