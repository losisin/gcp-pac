import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const requireBinaryLogEnabledMysql = {
	name: "sql-require-binary-log-enabled-mysql",
	description: "Check that MySQL Database Instance has binary logging enabled.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
			const settings = args.props.settings;
			const databaseVersion = args.props.databaseVersion;
			if (settings && databaseVersion.startsWith("MYSQL")) {
				const backupConfiguration = settings.backupConfiguration?.enabled;
				const binaryLogEnabled = settings.backupConfiguration?.binaryLogEnabled;
				if ( backupConfiguration && !binaryLogEnabled)
					reportViolation(
						"MySQL Database Instance should have binary logging enabled when using automated backups."
					);
			}
		}
	},
};
