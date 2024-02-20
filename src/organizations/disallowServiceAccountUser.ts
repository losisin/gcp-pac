import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowServiceAccountUser = {
	name: 'organizations-disallow-service-account-user',
	description: `Check that IAM users don't have 'Role: Service Account User'.`,
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = `IAM users shouldn't have 'roles/iam.serviceAccountUser' on organization level.`
		const role = args.props.role
		if (args.type === 'gcp:organizations/iAMBinding:IAMBinding') {
			if (role === 'roles/iam.serviceAccountUser') {
				reportViolation(message)
			}
		}
		if (args.type === 'gcp:organizations/iAMMember:IAMMember') {
			if (role === 'roles/iam.serviceAccountUser') {
				reportViolation(message)
			}
		}
	}
}
