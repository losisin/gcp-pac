import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowWeakChipherSuites = {
	name: 'compute-ssl-policy-disallow-weak-chipher-suites',
	description: 'Check that SSL Policy is not using weak cipher suites.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/sSLPolicy:SSLPolicy') {
			const customFeatures = args.props.customFeatures
			const weakChipherSuites = [
				'TLS_RSA_WITH_AES_128_GCM_SHA256',
				'TLS_RSA_WITH_AES_256_GCM_SHA384',
				'TLS_RSA_WITH_AES_128_CBC_SHA',
				'TLS_RSA_WITH_AES_256_CBC_SHA',
				'TLS_RSA_WITH_3DES_EDE_CBC_SHA'
			]
			if (
				customFeatures &&
				customFeatures.some((feature: string) => weakChipherSuites.includes(feature))
			) {
				reportViolation('SSL Policy should not use weak cipher suites.')
			}
		}
	}
}
