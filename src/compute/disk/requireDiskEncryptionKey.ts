import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireDiskEncryptionKey = {
	name: 'compute-disk-require-disk-encryption-key',
	description: 'Check that Disk is encrypted with Customer Supplied Encryption Keys (CSEK).',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/disk:Disk') {
			const diskEncryptionKey = args.props.diskEncryptionKey
			if (!diskEncryptionKey) {
				reportViolation('Disk should be encrypted with customer-supplied key.')
			}
		}
	}
}
