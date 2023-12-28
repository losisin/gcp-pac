import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const requireCmekTable = {
	name: "bigquery-table-require-cmek",
	description: "Check that BigQuery Table is encrypted using CMEK.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:bigquery/table:Table") {
			const encryption = args.props.encryptionConfiguration;
			if (!encryption || !encryption.kmsKeyName) {
				reportViolation(
					"BigQuery Table should be protected with customer-managed encryption keys (CMEK)."
				);
			}
		}
	}
}
