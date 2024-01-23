import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableStackdriverLogging = {
	name: 'datafusion-instance-require-enable-stackdriver-logging',
	description: 'Check that Datafusion Instance has Stackdriver Logging enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:datafusion/instance:Instance') {
			const enableStackdriverLogging = args.props.enableStackdriverLogging
			if (!enableStackdriverLogging) {
				reportViolation(
					'Datafusion Instance should have enableStackdriverLogging set to true.'
				)
			}
		}
	}
}
