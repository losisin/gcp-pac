import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableCdn = {
	name: 'compute-backend-service-require-enable-cdn',
	description: 'Check that Backend Service has CDN enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/backendService:BackendService') {
			const loadBalancingScheme = args.props.loadBalancingScheme
			const enableCdn = args.props.enableCdn
			if (
				(!loadBalancingScheme || loadBalancingScheme.startsWith('EXTERNAL')) &&
				!enableCdn
			) {
				reportViolation("Backend Service with scheme 'EXTERNAL' should have CDN enabled.")
			}
		}
	}
}
