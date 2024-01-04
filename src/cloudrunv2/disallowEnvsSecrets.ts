import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const serviceDisallowEnvsSecrets = {
	name: 'cloudrunv2-service-disallow-envs-secrets',
	description: 'Check that CloudRun2 services do not use environment variables from secrets.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:cloudrunv2/service:Service') {
			const containers = args.props.template.containers
			if (containers) {
				containers.forEach((container: any) => {
					if (container.envs) {
						container.envs.forEach((env: any) => {
							if (env?.valueSource?.secretKeyRef) {
								reportViolation(
									'CloudRun2 services should use secrets as mounted volumes.'
								)
							}
						})
					}
				})
			}
		}
	}
}

export const jobDisallowEnvsSecrets = {
	name: 'cloudrunv2-job-disallow-envs-secrets',
	description: 'Check that CloudRun2 jobs do not use environment variables from secrets.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:cloudrunv2/job:Job') {
			const containers = args.props.template.template.containers
			if (containers) {
				containers.forEach((container: any) => {
					if (container.envs) {
						container.envs.forEach((env: any) => {
							if (env?.valueSource?.secretKeyRef) {
								reportViolation(
									'CloudRun2 jobs should use secrets as mounted volumes.'
								)
							}
						})
					}
				})
			}
		}
	}
}
