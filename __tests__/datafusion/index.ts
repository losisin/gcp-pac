import * as gcp from '@pulumi/gcp'

export const datafusionInstance = new gcp.datafusion.Instance('fail1', {
	region: 'europe-west1',
	type: 'BASIC',
	enableRbac: false,
	enableStackdriverLogging: false,
	enableStackdriverMonitoring: false,
	cryptoKeyConfig: {
		keyReference: ''
	},
	privateInstance: false,
	networkConfig: {
		network: 'default',
		ipAllocation: '10.0.0.1/22'
	}
})
