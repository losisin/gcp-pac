import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDeletionProtection = {
	name: 'spanner-database-require-deletion-protection',
	description: 'Check that Spanner Database has deletion protection enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:spanner/database:Database') {
			const deletionProtection = args.props.deletionProtection
			if (!deletionProtection) {
				reportViolation('Spanner Database should have deletionProtection to true.')
			}
		}
	}
}
