import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireMonitoringService = {
	name: 'container-cluster-monitoring-service',
	description: 'Check that GKE Cluster monitoring service is enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const monitoringService = args.props.monitoringService
			if (monitoringService === 'none') {
				reportViolation(
					'GKE Cluster should have monitoring service defined to write metrics to.'
				)
			}
		}
	}
}
