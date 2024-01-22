import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireInstanceCmek = {
	name: 'bigtable-instance-require-customer-managed-key',
	description: 'Check that Bigtable Instance is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:bigtable/instance:Instance') {
			const clusters = args.props.clusters
			if (!clusters.some((c: any) => c.kmsKeyName)) {
				reportViolation(
					'Bigtable Instance should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
