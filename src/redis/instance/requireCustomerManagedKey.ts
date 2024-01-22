import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireCustomerManagedKey = {
	name: 'redis-instance-require-customer-managed-key',
	description: 'Check that Redis Instance is encrypted using CMEK.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:redis/instance:Instance') {
			const customerManagedKey = args.props.customerManagedKey
			if (!customerManagedKey) {
				reportViolation(
					'Redis Instance should be protected with customer-managed encryption keys (CMEK).'
				)
			}
		}
	}
}
