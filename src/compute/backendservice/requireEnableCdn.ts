import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableCdn = {
	name: 'compute-backend-service-require-enable-cdn',
	description: 'Check that Backend Service has CDN enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/backendService:BackendService') {
			const loadBalancingScheme = args.props.loadBalancingScheme
			if (!loadBalancingScheme || loadBalancingScheme.startsWith('EXTERNAL')) {
				const iap = args.props.iap
				const enableCdn = args.props.enableCdn
				if (!iap && !enableCdn) {
					reportViolation(
						'Backend Service should have CDN enabled when IAP is not configured.'
					)
				}
			}
		}
	}
}
