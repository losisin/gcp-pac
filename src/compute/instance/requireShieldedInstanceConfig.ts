import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireShieldedInstanceConfig = {
	name: 'compute-instance-require-shielded-instance-config',
	description: 'Check that Compute Instance is launched with Shielded VM enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const shieldedInstanceConfig = args.props.shieldedInstanceConfig
			const message = 'Compute Instance should have integrity monitoring and vtpm enabled.'
			if (!shieldedInstanceConfig) {
				reportViolation(message)
			} else if (
				!shieldedInstanceConfig.enableIntegrityMonitoring ||
				!shieldedInstanceConfig.enableVtpm
			) {
				reportViolation(message)
			}
		}
	}
}
