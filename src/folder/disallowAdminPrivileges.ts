import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowAdminPrivileges = {
	name: 'folder-disallow-admin-privileges',
	description: `Check that Folder Service Account has no admin privileges.`,
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const message = `Service Account shouldn't have admin privileges on folder level.`
		const role = args.props.role
		const adminRoles = ['admin', 'Admin', 'owner', 'editor']
		if (args.type === 'gcp:folder/iAMBinding:IAMBinding') {
			const sa = args.props.members
			if (
				sa.some((sa: string) => sa.endsWith('iam.gserviceaccount.com')) &&
				adminRoles.some((r: any) => role.endsWith(r))
			) {
				reportViolation(message)
			}
		}
		if (args.type === 'gcp:folder/iAMMember:IAMMember') {
			const sa = args.props.member
			if (
				sa.endsWith('iam.gserviceaccount.com') &&
				adminRoles.some((r: any) => role.endsWith(r))
			) {
				reportViolation(message)
			}
		}
	}
}
