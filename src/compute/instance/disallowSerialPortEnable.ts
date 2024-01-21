import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowSerialPortEnable = {
	name: 'compute-instance-disallow-serial-port-enable',
	description:
		'Check that Compute Instance "Enable connecting to serial ports" configuration setting is disabled.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/instance:Instance') {
			const metadata = args.props.metadata
			const serialPort = metadata['serial-port-enable']
			if (serialPort && serialPort.toLowerCase() === 'true') {
				reportViolation(
					"Compute Instance should have 'serial-port-enable' removed or disabled."
				)
			}
		}
	}
}
