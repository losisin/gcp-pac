import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireCryptoKeyConfig = {
	name: 'datafusion-instance-require-cryptokey-config',
	description: 'Check that Datafusion Instance is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:datafusion/instance:Instance') {
			const cryptoKeyConfig = args.props.cryptoKeyConfig
			if (!cryptoKeyConfig?.keyReference) {
				reportViolation(
					'Datafusion Instance should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
