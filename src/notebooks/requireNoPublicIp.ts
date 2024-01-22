import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireNoPublicIp = {
	name: 'notebooks-instance-require-no-public-ip',
	description: 'Check that Notebooks Instance does not have external IP address.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:notebooks/instance:Instance') {
			const noPublicIp = args.props.noPublicIp
			if (!noPublicIp) {
				reportViolation('Notebooks Instance should be assigned only private IP.')
			}
		}
	}
}
