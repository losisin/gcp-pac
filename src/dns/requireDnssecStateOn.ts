import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDnssecStateOn = {
	name: 'dns-required-dnssec-state-on',
	description: 'Check that Managed Zone DNSSEC is enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:dns/managedZone:ManagedZone') {
			const dnssecConfig = args.props.dnssecConfig
			if (!dnssecConfig || dnssecConfig.state !== 'on') {
				reportViolation('Managed Zone DNSSEC state should be set to on.')
			}
		}
	}
}
