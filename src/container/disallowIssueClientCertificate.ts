import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowIssueClientCertificate = {
	name: 'container-cluster-issue-client-certificate',
	description: "Check that GKE Cluster doesn't issue client certificate.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/cluster:Cluster') {
			const masterAuth = args.props.masterAuth?.clientCertificateConfig
			if (masterAuth?.issueClientCertificate) {
				reportViolation("GKE Cluster should have 'issueClientCertificate' set to false.")
			}
		}
	}
}
