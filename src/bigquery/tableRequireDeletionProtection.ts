import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const tableRequireDeletionProtection = {
	name: "bigquery-table-require-deletion-protection",
	description: "Check that BigQuery Table enables 'deletionProtection'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:bigquery/table:Table") {
			const deletionProtection = args.props.deletionProtection;
			if (!deletionProtection) {
				reportViolation(
					"BigQuery Table should be protected from accidental deletion."
				);
			}
		}
	}
}
