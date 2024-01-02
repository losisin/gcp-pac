import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

interface ExpectedFlag {
    name: string;
    value: string[];
    required: boolean; // 'true' indicates that default value violates the policy
}

// https://cloud.google.com/sql/docs/postgres/flags
const expectedFlags: ExpectedFlag[] = [
    {
        name: "log_error_verbosity",
        value: ["default", "verbose"],
        required: false,
    },
    {
        name: "log_connections",
        value: ["on"],
        required: true,
    },
    {
        name: "log_disconnections",
        value: ["on"],
        required: true,
    },
    {
        name: "log_statement",
        value: ["ddl", "mod", "all"],
        required: true,
    },
    {
        name: "log_min_error_statement",
        value: ["debug5", "debug4", "debug3", "debug2", "debug1", "info", "notice", "warning", "error"],
        required: false,
    },
    {
        name: "log_min_duration_statement",
        value: ["-1"],
        required: false,
    },
    {
        name: "cloudsql.enable_pgaudit",
        value: ["on"],
        required: true,
    },
];

export const requireDatabaseFlagsPostgres = {
    name: "sql-require-database-flags-postgres",
    description: "Check that PostgreSQL Database Instance has database flags set.",
    enforcementLevel: "advisory" as EnforcementLevel,
    validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
        if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
            const settings = args.props.settings;
            const databaseVersion = args.props.databaseVersion;
            if (settings && databaseVersion.startsWith("POSTGRES")) {
                const flags = settings.databaseFlags;
				if (!flags) {
					expectedFlags.forEach((flag: ExpectedFlag) => {
						if (flag.required) {
							reportViolation(`Database flag ${flag.name} is missing.`);
						}
					});
                } else {
                    flags.forEach((flag: any) => {
                        const expectedFlag = expectedFlags.find((ef) => ef.name === flag.name);
                        if (expectedFlag && !expectedFlag.value.includes(flag.value)) {
							reportViolation(
								`Database flag ${flag.name} should be set appropriately.`
							);
                        }
                    });
                    expectedFlags.forEach((expectedFlag: ExpectedFlag) => {
                        const matchedFlag = flags.find((flag: any) => flag.name === expectedFlag.name);
                        if (!matchedFlag && expectedFlag.required) {
                            reportViolation(`Database flag ${expectedFlag.name} is missing.`);
                        }
                    });
                }
            }
        }
    },
};
