import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDeletionProtection = {
	name: 'bigtable-instance-require-deletion-protection',
	description: 'Check that Bigtable Instance has deletion protection enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:bigtable/instance:Instance') {
			const deletionProtection = args.props.deletionProtection
			if (!deletionProtection) {
				reportViolation('Bigtable Instance should have deletionProtection to true.')
			}
		}
	}
}
