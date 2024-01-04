import * as gcp from '@pulumi/gcp'

export const bigqueryDataset = new gcp.bigquery.Dataset('fail#1', {
	datasetId: 'my-dataset',
	location: 'europe-west1',
	deleteContentsOnDestroy: true
})

export const bigqueryTable = new gcp.bigquery.Table('fail#1', {
	datasetId: 'my-dataset',
	tableId: 'my-table',
	deletionProtection: false
})

export const bigqueryDatasetIamBinding = new gcp.bigquery.DatasetIamBinding('fail#1', {
	datasetId: 'my-dataset',
	role: 'roles/bigquery.dataViewer',
	members: ['allAuthenticatedUsers']
})

export const bigqueryDatasetIamMember = new gcp.bigquery.DatasetIamMember('fail#1', {
	datasetId: 'my-dataset',
	role: 'roles/bigquery.dataViewer',
	member: 'allUsers'
})

export const bigqueryIamBinding = new gcp.bigquery.IamBinding('fail#1', {
	datasetId: 'my-dataset',
	tableId: 'my-table',
	role: 'roles/bigquery.dataViewer',
	members: ['allAuthenticatedUsers']
})

export const bigqueryIamMember = new gcp.bigquery.IamMember('fail#1', {
	datasetId: 'my-dataset',
	tableId: 'my-table',
	role: 'roles/bigquery.dataViewer',
	member: 'allUsers'
})
