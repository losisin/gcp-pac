import * as gcp from '@pulumi/gcp'

export const cloudrunv2Service = new gcp.cloudrunv2.Service('fail#1', {
	location: 'europe-west1',
	ingress: 'INGRESS_TRAFFIC_ALL',
	template: {
		containers: [
			{
				image: 'us-docker.pkg.dev/cloudrun/container/hello',
				envs: [
					{
						name: 'FOO',
						value: 'bar'
					},
					{
						name: 'SECRET_ENV_VAR',
						valueSource: {
							secretKeyRef: {
								secret: 'my-secret',
								version: '1'
							}
						}
					}
				]
			}
		]
	}
})

export const cloudrunv2Job = new gcp.cloudrunv2.Job('fail#1', {
	location: 'europe-west1',
	template: {
		template: {
			containers: [
				{
					image: 'us-docker.pkg.dev/cloudrun/container/hello',
					envs: [
						{
							name: 'FOO',
							value: 'bar'
						},
						{
							name: 'SECRET_ENV_VAR',
							valueSource: {
								secretKeyRef: {
									secret: 'my-secret',
									version: '1'
								}
							}
						}
					]
				}
			]
		}
	}
})
