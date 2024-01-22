import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireMetadataStoreCmek = {
	name: 'vertex-metadatastore-require-customer-managed-key',
	description: 'Check that Vertex AiMetadataStore is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:vertex/aiMetadataStore:AiMetadataStore') {
			const encryptionSpec = args.props.encryptionSpec
			if (!encryptionSpec?.kmsKeyName) {
				reportViolation(
					'Vertex AiMetadataStore should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
