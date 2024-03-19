import * as gcp from '@pulumi/gcp'

export const cryptoKey1 = new gcp.kms.CryptoKey('fail1', {
	keyRing: 'example-key-ring',
	rotationPeriod: '100000000s'
})

export const cryptoKey2 = new gcp.kms.CryptoKey('fail2', {
	keyRing: 'example-key-ring'
})

export const cryptoKeyIamBinding = new gcp.kms.CryptoKeyIAMBinding('fail1', {
	cryptoKeyId: cryptoKey1.id,
	role: 'roles/cloudkms.cryptoOperator',
	members: ['allAuthenticatedUsers']
})

export const cryptoKeyIamMember = new gcp.kms.CryptoKeyIAMMember('fail1', {
	cryptoKeyId: cryptoKey1.id,
	role: 'roles/cloudkms.cryptoOperator',
	member: 'allUsers'
})
