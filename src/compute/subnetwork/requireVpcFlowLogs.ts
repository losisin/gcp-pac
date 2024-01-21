import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const requireVpcFlowLogs = {
	name: 'compute-subnetwork-require-vpc-flow-logs',
	description: 'Check that Subnetwork has VPC Flow logs enabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/subnetwork:Subnetwork') {
			const purpose = args.props.purpose
			const logConfig = args.props.logConfig
			if ((!purpose || !purpose.endsWith('MANAGED_PROXY')) && !logConfig) {
				reportViolation("Subnetwork should 'logConfig' configred.")
			}
		}
	}
}
