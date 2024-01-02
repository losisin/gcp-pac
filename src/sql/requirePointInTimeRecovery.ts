import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const requirePointInTimeRecovery = {
	name: "sql-require-point-in-time-recovery",
	description: "Check that CloudSQL Database Instance have point-in-time recovery enabled.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
			const settings = args.props.settings;
			if (settings) {
				const databaseVersion = args.props.databaseVersion;
				const pointInTime = settings.backupConfiguration?.pointInTimeRecoveryEnabled;
				if (!databaseVersion.startsWith("MYSQL") && !pointInTime) {
					reportViolation(
						"CloudSQL Database Instance should set 'pointInTimeRecoveryEnabled' to true."
					);
				}
			}
		}
	}
}
