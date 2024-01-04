import * as gcp from '@pulumi/gcp'

export const cloudfunctionsv2Function = new gcp.cloudfunctionsv2.Function('fail#1', {
	name: 'my-function',
	location: 'europe-west1',
	buildConfig: {
		runtime: 'nodejs20'
	},
	serviceConfig: {
		ingressSettings: 'ALLOW_ALL',
		vpcConnector: 'my-connector',
		vpcConnectorEgressSettings: 'ALL_TRAFFIC',
		secretEnvironmentVariables: [
			{
				projectId: 'my-project',
				key: 'SECRET_ENV_VAR',
				secret: 'my-secret',
				version: '1'
			}
		]
	}
})

export const cloudfunctionsv2FunctionNodejs = new gcp.cloudfunctionsv2.Function('fail#2', {
	name: 'my-function',
	location: 'europe-west1',
	kmsKeyName: 'my-key',
	buildConfig: {
		runtime: 'nodejs16'
	}
})

export const cloudfunctionsv2FunctionPython = new gcp.cloudfunctionsv2.Function('fail#3', {
	name: 'my-function',
	location: 'europe-west1',
	kmsKeyName: 'my-key',
	buildConfig: {
		runtime: 'python37'
	}
})

export const cloudfunctionsv2FunctionGo = new gcp.cloudfunctionsv2.Function('fail#4', {
	name: 'my-function',
	location: 'europe-west1',
	kmsKeyName: 'my-key',
	buildConfig: {
		runtime: 'go119'
	}
})

export const cloudfunctionsv2FunctionJava = new gcp.cloudfunctionsv2.Function('fail#5', {
	name: 'my-function',
	location: 'europe-west1',
	kmsKeyName: 'my-key',
	buildConfig: {
		runtime: 'java17'
	}
})

export const cloudfunctionsv2FunctionRuby = new gcp.cloudfunctionsv2.Function('fail#6', {
	name: 'my-function',
	location: 'europe-west1',
	kmsKeyName: 'my-key',
	buildConfig: {
		runtime: 'ruby30'
	}
})

export const cloudfunctionsv2FunctionPhp = new gcp.cloudfunctionsv2.Function('fail#7', {
	name: 'my-function',
	location: 'europe-west1',
	kmsKeyName: 'my-key',
	buildConfig: {
		runtime: 'php74'
	}
})

export const cloudfunctionsv2FunctionDotNetCore = new gcp.cloudfunctionsv2.Function('fail#8', {
	name: 'my-function',
	location: 'europe-west1',
	kmsKeyName: 'my-key',
	buildConfig: {
		runtime: 'dotnet3'
	}
})
