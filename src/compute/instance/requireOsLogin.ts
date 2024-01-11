import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireOsLogin = {
	name: 'compute-instance-require-os-login',
	description: 'Check that Compute Instance has OS login enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const metadata = args.props.metadata
			const message = "Compute Instance should have 'enable-oslogin' set to true."
			if (!metadata || Object.keys(metadata).length === 0) {
				reportViolation(message)
			} else {
				const key = metadata['enable-oslogin']
				if (key === undefined || key.toLowerCase() !== 'true') {
					reportViolation(message)
				}
			}
		}
	}
}
