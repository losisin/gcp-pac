import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireApiKeySourceRestrictions = {
	name: 'projects-apikey-require-source-restrictions',
	description: `Check Projects ApiKey source hosts and apps restrictions.`,
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:projects/apiKey:ApiKey') {
			const restrictions = args.props.restrictions
			const sourceTargets = [
				restrictions?.androidKeyRestrictions,
				restrictions?.browserKeyRestrictions,
				restrictions?.iosKeyRestrictions,
				restrictions?.serverKeyRestrictions
			]
			if (sourceTargets.every(s => !s || s.length === 0)) {
				reportViolation(`Projects ApiKey should be restricted to allowed host and apps.`)
			}
		}
	}
}
