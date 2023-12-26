import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowEnvsSecrets = {
	name: "cloudrun-service-disallow-envs-secrets",
	description: "Check that CloudRun services do not use environment variables from secrets.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudrun/service:Service") {
            const containers = args.props.template.spec.containers;
            if (containers) {
                containers.forEach((container: any) => {
                    if (container.envs) {
                        container.envs.forEach((env: any) => {
                            if (env?.valueFrom?.secretKeyRef) {
                                reportViolation(
                                    "CloudRun services should use secrets as mounted volumes."
                                );
                            }
                        });
                    }
              });
            }
		}
	},
}
