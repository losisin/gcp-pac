import * as gcp from '@pulumi/gcp'

export const apiKey = new gcp.projects.ApiKey('fail1', {
	displayName: 'my-key',
	project: 'my-project',
	restrictions: {}
})
