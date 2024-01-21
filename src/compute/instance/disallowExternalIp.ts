import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowExternalIp = {
	name: 'compute-instance-disallow-external-ip',
	description: "Check that Compute Instance doesn't have external IP address.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const accessConfigs = args.props.networkInterfaces.some((ac: any) => ac.accessConfigs)
			if (accessConfigs) {
				reportViolation('Compute Instance should be assigned only private IPs.')
			}
		}
	}
}
