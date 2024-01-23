import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireEnableRbac = {
	name: 'datafusion-instance-require-enable-rbac',
	description: 'Check that Datafusion Instance has RBAC enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:datafusion/instance:Instance') {
			const enableRbac = args.props.enableRbac
			if (!enableRbac) {
				reportViolation('Datafusion Instance should granular role-based access control.')
			}
		}
	}
}
