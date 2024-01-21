import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDeletionProtection = {
	name: 'compute-instance-require-deletion-protection',
	description: "Check that Compute Instance enables 'deletionProtection'.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const deletionProtection = args.props.deletionProtection
			if (!deletionProtection) {
				reportViolation('Compute Instance should be protected from accidental deletion.')
			}
		}
	}
}
