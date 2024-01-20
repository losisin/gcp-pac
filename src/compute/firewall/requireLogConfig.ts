import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireLogConfig = {
	name: 'compute-firewall-require-logconfig',
	description: 'Check that Compute Firewall has logging enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/firewall:Firewall') {
			const logConfig = args.props.logConfig
			if (!logConfig) {
				reportViolation(
					"Compute Firewall rule should have 'logConfig' configured. Consider excluding metadata to reduce costs."
				)
			}
		}
	}
}
