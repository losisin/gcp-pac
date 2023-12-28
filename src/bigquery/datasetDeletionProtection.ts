import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const datasetDeletionProtection = {
	name: "bigquery-dataset-deletion-protection",
	description: "Check that BigQuery Dataset enables 'deleteContentsOnDestroy'.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:bigquery/dataset:Dataset") {
			const deletionProtection = args.props.deleteContentsOnDestroy;
			if (deletionProtection) {
				reportViolation(
					"BigQuery Dataset should be protected from accidental deletion."
				);
			}
		}
	}
}
