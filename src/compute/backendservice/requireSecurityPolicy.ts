import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireSecurityPolicy = {
	name: 'backend-service-require-security-policy',
	description: 'Check that Backend Service has a security policy set.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/backendService:BackendService') {
			const loadBalancingScheme = args.props.loadBalancingScheme
			const securityPolicy = args.props.securityPolicy
			if (loadBalancingScheme !== 'INTERNAL_SELF_MANAGED' && !securityPolicy) {
				reportViolation(
					'Backend Service should have a security policy set unless scheme is INTERNAL_SELF_MANAGED.'
				)
			}
		}
	}
}
