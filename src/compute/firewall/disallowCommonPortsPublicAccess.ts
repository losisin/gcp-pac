import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

const restrictedPorts: number[] = [
	20, // FTP
	21, // FTP
	22, // SSH
	25, // SMTP
	53, // DNS
	135, // RPC
	1521, // Oracle Database
	3306, // MySQL
	3389, // RDP
	5432, // PostgreSQL
	1433 // Microsoft SQL Server
]

export const disallowCommonPortsPublicAccess = {
	name: 'compute-firewall-disallow-common-ports-public-access',
	description: "Check that Compute Firewall doesn't allow unrestricted access to common ports.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:compute/firewall:Firewall') {
			const sourceRanges = args.props.sourceRanges
			const allowed = args.props.allows
			if (sourceRanges && sourceRanges.includes('0.0.0.0/0')) {
				for (const rule of allowed) {
					const ports = rule.ports
					ports?.forEach((port: string) => {
						if (restrictedPorts.includes(Number(port))) {
							reportViolation(
								`Compute Firewall rule should not allow unrestricted access on port ${port}.`
							)
						}
					})
				}
			}
		}
	}
}
