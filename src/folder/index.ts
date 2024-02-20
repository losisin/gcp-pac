import { disallowAdminPrivileges } from './disallowAdminPrivileges'
import { disallowServiceAccountTokenCreator } from './disallowServiceAccountTokenCreator'
import { disallowServiceAccountUser } from './disallowServiceAccountUser'

export const folderPolicies = [
	disallowAdminPrivileges,
	disallowServiceAccountTokenCreator,
	disallowServiceAccountUser
]
