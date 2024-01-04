import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const tableDisallowPublicAccess = {
	name: 'bigquery-table-disallow-public-access',
	description: 'Check that BigQuery Table is private.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const publicPrincipals = ['allUsers', 'allAuthenticatedUsers']
		if (args.type === 'gcp:bigquery/iamBinding:IamBinding') {
			const members = args.props.members
			if (members) {
				members.forEach((member: string) => {
					if (publicPrincipals.includes(member)) {
						reportViolation(
							'BigQuery Table should not be anonymously or publicly accessible.'
						)
					}
				})
			}
		} else if (args.type === 'gcp:bigquery/iamMember:IamMember') {
			const member = args.props.member
			if (member && publicPrincipals.includes(member)) {
				reportViolation('BigQuery Table should not be anonymously or publicly accessible.')
			}
		}
	}
}
