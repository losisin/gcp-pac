import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireApiKeyRestrictions = {
	name: 'projects-apikey-require-restrictions',
	description: 'Check Projects ApiKey restrictions.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:projects/apiKey:ApiKey') {
			const restrictions = args.props.restrictions
			if (!restrictions || Object.keys(restrictions).length === 0) {
				reportViolation('Projects ApiKey should be restricted.')
			}
		}
	}
}
