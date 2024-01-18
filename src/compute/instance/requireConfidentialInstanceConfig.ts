import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireConfidentialInstanceConfig = {
	name: 'compute-instance-require-confidential-instance-config',
	description: 'Check that Compute Instance is launched with Confidential Computing enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const confidentialInstanceConfig = args.props.confidentialInstanceConfig
			if (
				!confidentialInstanceConfig ||
				!confidentialInstanceConfig.enableConfidentialCompute
			) {
				reportViolation('Compute Instance should have Confidential Mode enabled.')
			}
		}
	}
}
