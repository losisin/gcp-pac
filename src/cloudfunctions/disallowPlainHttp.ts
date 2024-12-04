import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowPlainHttp = {
	name: 'cloudfunctions-function-disallow-plain-http',
	description: "Check that CloudFunctions function don't accept plain 'HTTP'.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:cloudfunctions/function:Function') {
			const trigger = args.props.triggerHttp
			const httpsTrigger = args.props.httpsTriggerSecurityLevel
			if (trigger && httpsTrigger === 'SECURE_OPTIONAL') {
				reportViolation(
					"CloudFunctions function shouldn't accept plain 'HTTP' connections. Consider using 'SECURE_ALWAYS'."
				)
			}
		}
	}
}
