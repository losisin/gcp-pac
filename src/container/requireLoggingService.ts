import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireLoggingService = {
	name: 'container-cluster-loggin-service',
	description: 'Check that GKE Cluster logging service is enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const loggingService = args.props.loggingService
			if (loggingService === 'none') {
				reportViolation('GKE Cluster should have logging service defined to write logs to.')
			}
		}
	}
}
