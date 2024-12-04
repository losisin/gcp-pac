import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requirePasswordValidationPolicy = {
	name: 'sql-require-password-validation-policy',
	description: 'Check that CloudSQL Database Instance enables password validation.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			if (settings) {
				const passwordValidation = settings.passwordValidationPolicy?.enablePasswordPolicy
				if (!passwordValidation) {
					reportViolation(
						'CloudSQL Database Instance should have password validation policy enabled.'
					)
				}
			}
		}
	}
}
