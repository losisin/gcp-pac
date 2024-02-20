import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowServiceAccountTokenCreator = {
	name: 'organizations-disallow-service-account-token-creator',
	description: `Check that IAM users don't have 'Role: Service Account Token Creator'.`,
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = `IAM users shouldn't have 'roles/iam.serviceAccountTokenCreator' on organization level.`
		const role = args.props.role
		if (args.type === 'gcp:organizations/iAMBinding:IAMBinding') {
			if (role === 'roles/iam.serviceAccountTokenCreator') {
				reportViolation(message)
			}
		}
		if (args.type === 'gcp:organizations/iAMMember:IAMMember') {
			if (role === 'roles/iam.serviceAccountTokenCreator') {
				reportViolation(message)
			}
		}
	}
}
