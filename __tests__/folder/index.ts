import * as gcp from '@pulumi/gcp'

export const iamBinding1 = new gcp.folder.IAMBinding('fail1', {
	members: ['serviceAccount:account@123456789.iam.gserviceaccount.com'],
	folder: 'folders/1234567',
	role: 'roles/appengine.appAdmin'
})

export const iamBinding2 = new gcp.folder.IAMBinding('fail2', {
	members: ['user:jane@example.com'],
	folder: 'folders/1234567',
	role: 'roles/iam.serviceAccountUser'
})

export const iamBinding3 = new gcp.folder.IAMBinding('fail3', {
	members: ['user:jane@example.com'],
	folder: 'folders/1234567',
	role: 'roles/iam.serviceAccountTokenCreator'
})

export const iamMember1 = new gcp.folder.IAMMember('fail1', {
	member: 'serviceAccount:account@123456789.iam.gserviceaccount.com',
	folder: 'folders/1234567',
	role: 'roles/editor'
})

export const iamMember2 = new gcp.folder.IAMMember('fail2', {
	member: 'user:jane@example.com',
	folder: 'folders/1234567',
	role: 'roles/iam.serviceAccountUser'
})

export const iamMember3 = new gcp.folder.IAMMember('fail3', {
	member: 'user:jane@example.com',
	folder: 'folders/1234567',
	role: 'roles/iam.serviceAccountTokenCreator'
})
