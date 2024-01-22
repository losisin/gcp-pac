import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireRotationPeriod = {
	name: 'kms-cryptokey-require-rotation-period',
	description: 'Check that KMS Crypto Key is rotated regulary.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:kms/cryptoKey:CryptoKey') {
			const purpose = args.props.purpose
			const rotationPeriod = args.props.rotationPeriod
			if ((purpose === undefined || !purpose.startsWith('ASYMMETRIC')) && rotationPeriod) {
				const day = 86400
				const time: number = parseInt(rotationPeriod.slice(0, -1))
				if (time > 90 * day) {
					reportViolation('KMS Crypto Key should be rotated every 90 days or less.')
				}
			}
		}
	}
}
