import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowServiceAccountUser = {
	name: 'projects-disallow-service-account-user',
	description: `Check that IAM users don't have 'Role: Service Account User'.`,
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = `IAM users shouldn't have 'roles/iam.serviceAccountUser' on project level.`
		const role = args.props.role
		if (args.type === 'gcp:projects/iAMBinding:IAMBinding') {
			if (role === 'roles/iam.serviceAccountUser') {
				reportViolation(message)
			}
		}
		if (args.type === 'gcp:projects/iAMMember:IAMMember') {
			if (role === 'roles/iam.serviceAccountUser') {
				reportViolation(message)
			}
		}
	}
}
