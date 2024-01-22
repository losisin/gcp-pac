import * as gcp from '@pulumi/gcp'

export const spannerDatabase = new gcp.spanner.Database('fail1', {
	instance: 'fail1',
	deletionProtection: false,
	enableDropProtection: false
})
