import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowPublicAccess = {
	name: 'artifactregistry-iam-disallow-public-access',
	description: 'Check that Artifact Registry Repository is private.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const publicPrincipals = ['allUsers', 'allAuthenticatedUsers']
		if (args.type === 'gcp:artifactregistry/repositoryIamBinding:RepositoryIamBinding') {
			const members = args.props.members
			if (members) {
				members.forEach((member: string) => {
					if (publicPrincipals.includes(member)) {
						reportViolation(
							'Artifact Registry Repository should not be anonymously or publicly accessible.'
						)
					}
				})
			}
		} else if (args.type === 'gcp:artifactregistry/repositoryIamMember:RepositoryIamMember') {
			const member = args.props.member
			if (member && publicPrincipals.includes(member)) {
				reportViolation(
					'Artifact Registry Repository should not be anonymously or publicly accessible.'
				)
			}
		}
	}
}
