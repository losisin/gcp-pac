import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowImplicitPublicWhitelist = {
	name: 'sql-disallow-implicit-public-whitelist',
	description: "Check that CloudSQL Database Instance don't implicitly whitelist all public IPs.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:sql/databaseInstance:DatabaseInstance') {
			const settings = args.props.settings
			if (settings) {
				const authorizedNetworks = settings.ipConfiguration?.authorizedNetworks
				const allPublicIps = '0.0.0.0/0'
				if (authorizedNetworks?.some((network: any) => network.value === allPublicIps)) {
					reportViolation(
						"CloudSQL Database Instance should not whitelist '0.0.0.0./0' in 'authorizedNetworks'."
					)
				}
			}
		}
	}
}
