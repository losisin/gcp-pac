import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireSecurityPolicy = {
	name: 'backend-service-require-security-policy',
	description: 'Check that Backend Service has edge security policy set.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/backendService:BackendService') {
			const securityPolicy = args.props.securityPolicy
			const edgeSecurityPolicy = args.props.edgeSecurityPolicy
			if (!securityPolicy || !edgeSecurityPolicy) {
				reportViolation(
					'Backend Service should have a security policy set unless scheme is INTERNAL_SELF_MANAGED.'
				)
			}
		}
	}
}
