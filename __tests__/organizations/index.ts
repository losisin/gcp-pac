import * as gcp from '@pulumi/gcp'

export const iamBinding1 = new gcp.organizations.IAMBinding('fail1', {
	members: ['serviceAccount:account@123456789089.iam.gserviceaccount.com'],
	orgId: '1234567890',
	role: 'roles/appengine.appAdmin'
})

export const iamBinding2 = new gcp.organizations.IAMBinding('fail2', {
	members: ['user:jane@example.com'],
	orgId: '1234567890',
	role: 'roles/iam.serviceAccountUser'
})

export const iamBinding3 = new gcp.organizations.IAMBinding('fail3', {
	members: ['user:jane@example.com'],
	orgId: '1234567890',
	role: 'roles/iam.serviceAccountTokenCreator'
})

export const iamMember1 = new gcp.organizations.IAMMember('fail1', {
	member: 'serviceAccount:account@123456789089.iam.gserviceaccount.com',
	orgId: '1234567890',
	role: 'roles/editor'
})

export const iamMember2 = new gcp.organizations.IAMMember('fail2', {
	member: 'user:jane@example.com',
	orgId: '1234567890',
	role: 'roles/iam.serviceAccountUser'
})

export const iamMember3 = new gcp.organizations.IAMMember('fail3', {
	member: 'user:jane@example.com',
	orgId: '1234567890',
	role: 'roles/iam.serviceAccountTokenCreator'
})
