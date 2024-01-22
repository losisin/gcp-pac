import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowPublicAccess = {
	name: 'kms-cryptokey-iam-disallow-public-access',
	description: 'Check that KMS Crypto Key is private.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		const publicPrincipals = ['allUsers', 'allAuthenticatedUsers']
		const message = 'KMS Crypto Key should not be anonymously or publicly accessible.'
		if (args.type === 'gcp:kms/cryptoKeyIAMBinding:CryptoKeyIAMBinding') {
			const members = args.props.members
			if (members) {
				members.forEach((member: string) => {
					if (publicPrincipals.includes(member)) {
						reportViolation(message)
					}
				})
			}
		} else if (args.type === 'gcp:kms/cryptoKeyIAMMember:CryptoKeyIAMMember') {
			const member = args.props.member
			if (member && publicPrincipals.includes(member)) {
				reportViolation(message)
			}
		}
	}
}
