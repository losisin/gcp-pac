import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowIpForward = {
	name: 'compute-instance-disallow-ip-forward',
	description: 'Check that Compute Instance IP forwarding feature is not enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const ipForward = args.props.canIpForward
			if (ipForward) {
				reportViolation('Compute Instance should have IP forwarding disabled.')
			}
		}
	}
}
