import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireBlockProjectSSHKeys = {
	name: 'compute-instance-require-block-project-ssh-keys',
	description: 'Check that Compute Instance are configured to ignore project-wide SSH keys.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const metadata = args.props.metadata
			const message = "Compute Instance should have 'block-project-ssh-keys' set to true."
			if (!metadata || Object.keys(metadata).length === 0) {
				reportViolation(message)
			} else {
				const key = metadata['block-project-ssh-keys']
				if (key === undefined || key.toLowerCase() !== 'true') {
					reportViolation(message)
				}
			}
		}
	}
}
