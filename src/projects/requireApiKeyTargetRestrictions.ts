import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireApiKeyTargetRestrictions = {
	name: 'projects-apikey-require-target-restrictions',
	description: `Check Projects ApiKey target APIs restrictions.`,
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:projects/apiKey:ApiKey') {
			const restrictions = args.props.restrictions
			const apiTargets = restrictions?.apiTargets
			if (!apiTargets || apiTargets.length === 0) {
				reportViolation(`Projects ApiKey should restrict access only to needed APIs.`)
			} else {
				if (apiTargets.some((a: any) => a.service === 'cloudapis.googleapis.com')) {
					reportViolation(`Projects ApiKey should restrict access only to needed APIs.`)
				}
			}
		}
	}
}
