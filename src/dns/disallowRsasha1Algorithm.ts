import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowRsasha1Algorithm = {
	name: 'dns-disallow-rsasha1-algorithm',
	description: "Check that Managed Zone DNSSEC key doesn't use weak algorithm.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:dns/managedZone:ManagedZone') {
			const dnssecConfig = args.props.dnssecConfig
			if (
				dnssecConfig?.defaultKeySpecs?.some(
					(keySpec: any) => keySpec.algorithm === 'rsasha1'
				)
			) {
				reportViolation('Managed Zone DNSSEC key should not use RSASHA1 algorithm.')
			}
		}
	}
}
