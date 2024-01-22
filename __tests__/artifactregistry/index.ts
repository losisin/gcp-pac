import * as gcp from '@pulumi/gcp'

export const artifactregistryRepository = new gcp.artifactregistry.Repository('fail1', {
	format: 'DOCKER',
	repositoryId: 'my-repo',
	kmsKeyName: '',
	cleanupPolicies: []
})

export const artifactregistryIamBinding = new gcp.artifactregistry.RepositoryIamBinding('fail1', {
	repository: 'my-repo',
	role: 'roles/artifactregistry.reader',
	members: ['allAuthenticatedUsers']
})

export const artifactregistryIamMember = new gcp.artifactregistry.RepositoryIamMember('fail1', {
	repository: 'my-repo',
	role: 'roles/artifactregistry.reader',
	member: 'allUsers'
})
