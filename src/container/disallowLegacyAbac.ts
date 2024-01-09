import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowLegacyAbac = {
	name: 'container-cluster-legacy-abac',
	description: "Check that GKE Cluster doesn't enable ABAC authorizer.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const legacyAbac = args.props.enableLegacyAbac
			if (legacyAbac) {
				reportViolation("GKE Cluster should have 'enableLegacyAbac' set to false or unset.")
			}
		}
	}
}
