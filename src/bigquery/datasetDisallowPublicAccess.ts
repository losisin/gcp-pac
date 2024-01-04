import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const datasetDisallowPublicAccess = {
	name: 'bigquery-dataset-disallow-public-access',
	description: 'Check that BigQuery Dataset is private.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const publicPrincipals = ['allUsers', 'allAuthenticatedUsers']
		if (args.type === 'gcp:bigquery/datasetIamBinding:DatasetIamBinding') {
			const members = args.props.members
			if (members) {
				members.forEach((member: string) => {
					if (publicPrincipals.includes(member)) {
						reportViolation(
							'BigQuery Dataset should not be anonymously or publicly accessible.'
						)
					}
				})
			}
		} else if (args.type === 'gcp:bigquery/datasetIamMember:DatasetIamMember') {
			const member = args.props.member
			if (member && publicPrincipals.includes(member)) {
				reportViolation(
					'BigQuery Dataset should not be anonymously or publicly accessible.'
				)
			}
		}
	}
}
