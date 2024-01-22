import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableDropProtection = {
	name: 'spanner-database-require-eanble-drop-protection',
	description: 'Check that Spanner Database has drop protection enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:spanner/database:Database') {
			const enableDropProtection = args.props.enableDropProtection
			if (!enableDropProtection) {
				reportViolation('Spanner Database should be protected from accidental deletion.')
			}
		}
	}
}
