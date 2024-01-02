import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const requireRootPasswordMysql = {
	name: "sql-require-root-password-mysql",
	description: "Check that MySQL Database Instance enforces initial root password.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
			const databaseVersion = args.props.databaseVersion;
			const rootPassword = args.props.rootPassword;
			if (databaseVersion.startsWith("MYSQL") && !rootPassword) {
				reportViolation(
					"MySQL Database Instance should have password set for administrative user."
				);
			}
		}
	},

};
