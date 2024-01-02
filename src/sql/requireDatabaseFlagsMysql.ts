import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

interface ExpectedFlag {
    name: string;
    value: string;
    required: boolean;
}

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
    name: "sql-disallow-database-flags-mysql",
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
					expectedFlags.forEach((flag: ExpectedFlag) => {
						const matchedFlag = flags.find((f: any) => f.name === flag.name);
						if (matchedFlag.value !== flag.value) {
							reportViolation(`Database flag ${flag.name} should be set to '${flag.value}'.`);
						}
					});
				}
            }
        }
    }
};
