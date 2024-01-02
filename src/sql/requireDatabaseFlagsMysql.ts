import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

interface ExpectedFlag {
    name: string;
    value: string;
    required: boolean; // 'true' indicates that default value violates the policy
}

// https://cloud.google.com/sql/docs/mysql/flags
const expectedFlags: ExpectedFlag[] = [
    {
        name: "local_infile",
        value: "off",
        required: true,
    },
    {
        name: "skip_show_database",
        value: "on",
        required: true,
    },
];

export const requireDatabaseFlagsMysql = {
    name: "sql-require-database-flags-mysql",
    description: "Check that MySQL Database Instance has database flags set.",
    enforcementLevel: "advisory" as EnforcementLevel,
    validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
        if (args.type === "gcp:sql/databaseInstance:DatabaseInstance") {
            const settings = args.props.settings;
            const databaseVersion = args.props.databaseVersion;
            if (settings && databaseVersion.startsWith("MYSQL")) {
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
                        if (expectedFlag && expectedFlag.value !== flag.value) {
							reportViolation(
								`Database flag ${flag.name} should be set to '${expectedFlag.value}'.`
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
