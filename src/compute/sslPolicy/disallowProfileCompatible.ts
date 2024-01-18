import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowProfileCompatible = {
	name: 'compute-ssl-policy-disallow-profile-compatible',
	description: 'Check that SSL Policy uses appropriate profile.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/sSLPolicy:SSLPolicy') {
			const profile = args.props.profile
			if (!profile || profile === 'COMPATIBLE') {
				reportViolation('SSL Policy should not use profile COMPATIBLE.')
			}
		}
	}
}
