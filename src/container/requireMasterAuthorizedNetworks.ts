import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireMasterAuthorizedNetworks = {
	name: 'container-cluster-require-master-authorized-networks',
	description: 'Check that GKE Cluster is not publicly accessible.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const authorizedNetworks = args.props.masterAuthorizedNetworksConfig
			const message = 'GKE Cluster should not be publicly accessible.'
			if (authorizedNetworks === undefined) {
				reportViolation(message)
			} else if (Object.keys(authorizedNetworks).length > 0) {
				const cidrBlocks = authorizedNetworks.cidrBlocks
				if (cidrBlocks && cidrBlocks.some((cb: any) => cb.cidrBlock === '0.0.0.0/0')) {
					reportViolation(message)
				}
			}
		}
	}
}
