import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireMinTlsVersion = {
	name: 'compute-ssl-policy-require-min-tls-version',
	description: 'Check that SSL Policy uses appropriate version of SSL protocol.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/sSLPolicy:SSLPolicy') {
			const minTlsVersion = args.props.minTlsVersion
			if (!minTlsVersion || minTlsVersion !== 'TLS_1_2') {
				reportViolation('SSL Policy should use TLS 1.2.')
			}
		}
	}
}
