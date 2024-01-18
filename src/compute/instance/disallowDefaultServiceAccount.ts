import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowDefaultServiceAccount = {
	name: 'compute-instance-disallow-default-service-account',
	description: "Check that Compute Instance don't use default service account.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const gkeInstance = args.props.name.startsWith('gke-')
			if (!gkeInstance) {
				const sa = args.props.serviceAccount
				const saRegex = /^\d+-compute@developer\.gserviceaccount\.com/
				if (!sa || sa.email.match(saRegex))
					reportViolation(
						'Compute Instance should be configured with custom service account.'
					)
			}
		}
	}
}
