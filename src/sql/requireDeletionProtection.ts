import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const requireDeletionProtection = {
	name: "sql-require-deletion-protection",
	description: "Check that CloudSQL Database Instance enables 'deletionProtection'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
			const settings = args.props.settings;
			const protection = args.props.deletionProtection;
			if (!protection) {
				reportViolation(
					"CloudSQL Database Instance should be protected from accidental deletion."
				);
			}
			if (settings && !settings.deletionProtectionEnabled) {
				reportViolation(
					"CloudSQL Database Instance should be protected from accidental deletion."
				);
			}
		}
	}
}
