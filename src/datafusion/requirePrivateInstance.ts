import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requirePrivateInstance = {
	name: 'datafusion-instance-require-private-instance',
	description: 'Check that Datafusion Instance nodes have internal IP only.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:datafusion/instance:Instance') {
			const privateInstance = args.props.privateInstance
			if (!privateInstance) {
				reportViolation('Datafusion Instance nodes should not have external IP.')
			}
		}
	}
}
