import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireInstanceCmek = {
	name: 'notebooks-instance-require-customer-managed-key',
	description: 'Check that Notebooks Instance is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:notebooks/instance:Instance') {
			const kmsKey = args.props.kmsKey
			if (!kmsKey) {
				reportViolation(
					'Notebooks Instance should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
