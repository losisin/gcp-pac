import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowServiceAccountUser = {
	name: 'folder-disallow-service-account-user',
	description: `Check that IAM users don't have 'Role: Service Account User'.`,
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = `IAM users shouldn't have 'roles/iam.serviceAccountUser' on folder level.`
		const role = args.props.role
		if (args.type === 'gcp:folder/iAMBinding:IAMBinding') {
			if (role === 'roles/iam.serviceAccountUser') {
				reportViolation(message)
			}
		}
		if (args.type === 'gcp:folder/iAMMember:IAMMember') {
			if (role === 'roles/iam.serviceAccountUser') {
				reportViolation(message)
			}
		}
	}
}
