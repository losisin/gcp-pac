import * as gcp from '@pulumi/gcp'

export const iamBinding1 = new gcp.projects.IAMBinding('fail1', {
	members: ['serviceAccount:account@123456789.iam.gserviceaccount.com'],
	project: 'project-id',
	role: 'roles/appengine.appAdmin'
})

export const iamBinding2 = new gcp.projects.IAMBinding('fail2', {
	members: ['user:jane@example.com'],
	project: 'project-id',
	role: 'roles/iam.serviceAccountUser'
})

export const iamBinding3 = new gcp.projects.IAMBinding('fail3', {
	members: ['user:jane@example.com'],
	project: 'project-id',
	role: 'roles/iam.serviceAccountTokenCreator'
})

export const iamMember1 = new gcp.projects.IAMMember('fail1', {
	member: 'serviceAccount:account@123456789.iam.gserviceaccount.com',
	project: 'project-id',
	role: 'roles/editor'
})

export const iamMember2 = new gcp.projects.IAMMember('fail2', {
	member: 'user:jane@example.com',
	project: 'project-id',
	role: 'roles/iam.serviceAccountUser'
})

export const iamMember3 = new gcp.projects.IAMMember('fail3', {
	member: 'user:jane@example.com',
	project: 'project-id',
	role: 'roles/iam.serviceAccountTokenCreator'
})

export const apiKey1 = new gcp.projects.ApiKey('fail1', {
	displayName: 'my-key',
	project: 'my-project',
	restrictions: {}
})

export const apiKey2 = new gcp.projects.ApiKey('fail2', {
	displayName: 'my-key',
	project: 'my-project',
	restrictions: {
		apiTargets: [
			{
				service: 'cloudapis.googleapis.com'
			}
		],
		androidKeyRestrictions: {
			allowedApplications: [
				{
					packageName: 'com.example.app123',
					sha1Fingerprint: '1699466a142d4682a5f91b50fdf400f2358e2b0b'
				}
			]
		}
	}
})

export const apiKey3 = new gcp.projects.ApiKey('fail3', {
	displayName: 'my-key',
	project: 'my-project',
	restrictions: {
		apiTargets: [
			{
				service: 'translate.googleapis.com',
				methods: ['GET*']
			}
		]
	}
})
