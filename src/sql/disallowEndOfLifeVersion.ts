import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowEndOfLifeVersion = {
	name: "sql-disallow-end-of-life-version",
	description: "Check that CloudSQL Database Instance does not use end-of-life version.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
			const message = "CloudSQL Database Instance should use version with active or security support."
            const databaseVersion = args.props.databaseVersion;
			const match = databaseVersion.split("_");
			if (databaseVersion) {
				let engine = match[0];
				let version = match[1];
				switch (engine) {
					case "MYSQL": // https://endoflife.date/mysql
						if (version < 8) {
							reportViolation(message);
						}
						break;
					case "POSTGRES": // https://endoflife.date/postgresql
						if (version < 12) {
							reportViolation(message);
						}
						break;
					// case "SQLSERVER": // https://endoflife.date/mssqlserver
					// 	if (version < 2019) {
					// 		reportViolation(message);
					// 	}
					// 	break;
				}
			}
		}
	},
}
