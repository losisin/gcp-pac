import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireOsLogin = {
	name: 'compute-project-metadata-require-os-login',
	description: 'Check that OS login is enabled on project level.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/projectMetadata:ProjectMetadata') {
			const metadata = args.props.metadata
			const oslogin = metadata['enable-oslogin']
			if (oslogin === undefined || oslogin.toLowerCase() !== 'true') {
				reportViolation(
					"GCP project should have 'enable-oslogin' set in common instance metadata."
				)
			}
		}
	}
}
