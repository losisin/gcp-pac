import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireCmek = {
	name: 'cloudrunfunctionsv2-function-require-cmek',
	description: 'Check that CloudFunctions function use CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:cloudfunctionsv2/function:Function') {
			const cmek = args.props.kmsKeyName
			if (!cmek) {
				reportViolation(
					'CloudFunctions function should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
