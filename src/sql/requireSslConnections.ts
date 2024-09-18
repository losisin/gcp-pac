import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireSslConnections = {
	name: 'sql-require-ssl-connections',
	description: 'Check that Cloud SQL Database Instance enforces only SSL connections.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const message = 'Cloud SQL Database Instance should accept only SSL connections.'
			const settings = args.props.settings
			if (settings) {
				const ssl = settings.ipConfiguration?.sslMode
				if (!ssl) {
					reportViolation(message)
				} else {
					if (
						ssl === 'SSL_MODE_UNSPECIFIED' ||
						ssl === 'ALLOW_UNENCRYPTED_AND_ENCRYPTED'
					) {
						reportViolation(message)
					}
				}
			}
		}
	}
}
