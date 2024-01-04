import * as gcp from '@pulumi/gcp'

export const cloudfunctionsFunction = new gcp.cloudfunctions.Function('fail#1', {
	name: 'my-function',
	runtime: 'nodejs20',
	region: 'europe-west1',
	triggerHttp: true,
	httpsTriggerSecurityLevel: 'SECURE_OPTIONAL',
	ingressSettings: 'ALLOW_ALL',
	vpcConnector: 'my-connector',
	vpcConnectorEgressSettings: 'ALL_TRAFFIC',
	secretEnvironmentVariables: [
		{
			key: 'SECRET_ENV_VAR',
			secret: 'my-secret',
			version: '1'
		}
	]
})

export const cloudfunctionsFunctionNodejs = new gcp.cloudfunctions.Function('fail#2', {
	name: 'my-function',
	runtime: 'nodejs16',
	region: 'europe-west1',
	kmsKeyName: 'my-key',
	eventTrigger: {
		eventType: 'google.storage.object.finalize',
		resource: 'my-bucket'
	}
})

export const cloudfunctionsFunctionPython = new gcp.cloudfunctions.Function('fail#3', {
	name: 'my-function',
	runtime: 'python37',
	region: 'europe-west1',
	kmsKeyName: 'my-key',
	eventTrigger: {
		eventType: 'google.storage.object.finalize',
		resource: 'my-bucket'
	}
})

export const cloudfunctionsFunctionGo = new gcp.cloudfunctions.Function('fail#4', {
	name: 'my-function',
	runtime: 'go119',
	region: 'europe-west1',
	kmsKeyName: 'my-key',
	eventTrigger: {
		eventType: 'google.storage.object.finalize',
		resource: 'my-bucket'
	}
})

export const cloudfunctionsFunctionJava = new gcp.cloudfunctions.Function('fail#5', {
	name: 'my-function',
	runtime: 'java17',
	region: 'europe-west1',
	kmsKeyName: 'my-key',
	eventTrigger: {
		eventType: 'google.storage.object.finalize',
		resource: 'my-bucket'
	}
})

export const cloudfunctionsFunctionRuby = new gcp.cloudfunctions.Function('fail#6', {
	name: 'my-function',
	runtime: 'ruby30',
	region: 'europe-west1',
	kmsKeyName: 'my-key',
	eventTrigger: {
		eventType: 'google.storage.object.finalize',
		resource: 'my-bucket'
	}
})

export const cloudfunctionsFunctionPhp = new gcp.cloudfunctions.Function('fail#7', {
	name: 'my-function',
	runtime: 'php74',
	region: 'europe-west1',
	kmsKeyName: 'my-key',
	eventTrigger: {
		eventType: 'google.storage.object.finalize',
		resource: 'my-bucket'
	}
})

export const cloudfunctionsFunctionDotNetCore = new gcp.cloudfunctions.Function('fail#8', {
	name: 'my-function',
	runtime: 'dotnet3',
	region: 'europe-west1',
	kmsKeyName: 'my-key',
	eventTrigger: {
		eventType: 'google.storage.object.finalize',
		resource: 'my-bucket'
	}
})
