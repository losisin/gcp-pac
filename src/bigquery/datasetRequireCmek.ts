import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const datasetRequireCmek = {
	name: "bigquery-dataset-require-cmek",
	description: "Check that BigQuery Dataset is encrypted using CMEK.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:bigquery/dataset:Dataset") {
			const encryption = args.props.defaultEncryptionConfiguration;
			if (!encryption || !encryption.kmsKeyName) {
				reportViolation(
					"BigQuery Dataset should be protected with customer-managed encryption keys (CMEK)."
				);
			}
		}
	}
}
