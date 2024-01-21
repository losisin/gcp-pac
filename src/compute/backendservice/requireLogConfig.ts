import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireLogConfig = {
	name: 'compute-backend-service-require-logconfig',
	description: 'Check that Backend Service has logging enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/backendService:BackendService') {
			const logConfig = args.props.logConfig
			if (!logConfig || !logConfig.enable) {
				reportViolation("Backend Service rule should have 'logConfig' configured.")
			}
		}
	}
}
