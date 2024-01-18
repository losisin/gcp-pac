import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireBootDiskEncryption = {
	name: 'compute-instance-require-boot-disk-encryption',
	description:
		'Check that Compute Instance are encrypted with Customer Supplied Encryption Keys (CSEK).',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const bootDisk = args.props.bootDisk
			if (!bootDisk.diskEncryptionKeyRaw && !bootDisk.kmsKeySelfLink) {
				reportViolation('Compute Instance boot disk should be encrypted.')
			}
		}
	}
}
