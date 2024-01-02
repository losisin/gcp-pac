import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowDefaultVpc = {
	name: "sql-disallow-default-network",
	description: "Check that CloudSQL Database Instance is not deployed in default VPN network.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
			const settings = args.props.settings;
			if (settings) {
				const vpc = settings.ipConfiguration?.privateNetwork;
				if (vpc && vpc.endsWith("/default")) {
					reportViolation("CloudSQL Database Instance should not be accessible from default VPC network.");
				}
			}
		}
	}
}
