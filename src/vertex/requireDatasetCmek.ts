import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDatasetCmek = {
	name: 'vertex-dataset-require-customer-managed-key',
	description: 'Check that Vertex AiDataset is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:vertex/aiDataset:AiDataset') {
			const encryptionSpec = args.props.encryptionSpec
			if (!encryptionSpec?.kmsKeyName) {
				reportViolation(
					'Vertex AiDataset should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
