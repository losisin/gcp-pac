import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowVpcConnectorPublicEgress = {
	name: 'cloudfunctionsv2-function-disallow-vpcconnector-public-egress',
	description: "Check that CloudFunctions function VPC connector doesn't allow public egress.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:cloudfunctionsv2/function:Function') {
			const connector = args.props.serviceConfig?.vpcConnector
			const connectorEgress = args.props.serviceConfig?.vpcConnectorEgressSettings
			if (connector && connectorEgress === 'ALL_TRAFFIC') {
				reportViolation(
					"CloudFunctions function should not allow public egress through VPC connector. Consider setting to 'PRIVATE_RANGES_ONLY'."
				)
			}
		}
	}
}
