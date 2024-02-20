import { disallowAdminPrivileges } from './disallowAdminPrivileges'
import { disallowServiceAccountTokenCreator } from './disallowServiceAccountTokenCreator'
import { disallowServiceAccountUser } from './disallowServiceAccountUser'
import { requireApiKeyRestrictions } from './requireApiKeyRestrictions'
import { requireApiKeySourceRestrictions } from './requireApiKeySourceRestrictions'
import { requireApiKeyTargetRestrictions } from './requireApiKeyTargetRestrictions'

export const projectsPolicies = [
	disallowAdminPrivileges,
	disallowServiceAccountTokenCreator,
	disallowServiceAccountUser,
	requireApiKeyRestrictions,
	requireApiKeySourceRestrictions,
	requireApiKeyTargetRestrictions
]
