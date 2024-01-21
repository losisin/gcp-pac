import * as gcp from '@pulumi/gcp'

export const managedZone = new gcp.dns.ManagedZone('private-zone-gke', {
	dnsName: 'private.example.com.',
	dnssecConfig: {
		state: 'off',
		defaultKeySpecs: [
			{
				algorithm: 'rsasha1',
				keyType: 'keySigning'
			}
		]
	}
})
