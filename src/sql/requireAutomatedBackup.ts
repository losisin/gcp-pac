import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const requireAutomatedBackup = {
	name: "sql-require-automated-backup",
	description: "Check that CloudSQL Database Instance enables automated backups.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
			const settings = args.props.settings;
			if (settings) {
				const backup = settings.backupConfiguration?.enabled;
				if (!backup) {
					reportViolation(
						"CloudSQL Database Instance should should have backup configuration enabled."
					);
				}
			}
		}
	}
}
