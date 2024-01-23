import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableStackdriverMonitoring = {
	name: 'datafusion-instance-require-enable-stackdriver-monitoring',
	description: 'Check that Datafusion Instance has Stackdriver Monitoring enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:datafusion/instance:Instance') {
			const enableStackdriverMonitoring = args.props.enableStackdriverMonitoring
			if (!enableStackdriverMonitoring) {
				reportViolation(
					'Datafusion Instance should have enableStackdriverMonitoring set to true.'
				)
			}
		}
	}
}
