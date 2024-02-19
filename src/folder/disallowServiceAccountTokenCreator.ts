import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowServiceAccountTokenCreator = {
	name: 'folder-disallow-service-account-token-creator',
	description: `Check that IAM users don't have 'Role: Service Account Token Creator'.`,
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = `IAM users shouldn't have 'roles/iam.serviceAccountTokenCreator' on folder level.`
		const role = args.props.role
		if (args.type === 'gcp:folder/iAMBinding:IAMBinding') {
			if (role === 'roles/iam.serviceAccountTokenCreator') {
				reportViolation(message)
			}
		}
		if (args.type === 'gcp:folder/iAMMember:IAMMember') {
			if (role === 'roles/iam.serviceAccountTokenCreator') {
				reportViolation(message)
			}
		}
	}
}
