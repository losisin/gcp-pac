import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const serviceRequireDeletionProtection = {
	name: 'cloudrunv2-service-require-deletion-protection',
	description: "Check that CloudRun2 services enable 'deletionProtection'.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:cloudrunv2/service:Service') {
			const deletionProtection = args.props.deletionProtection
			if (!deletionProtection) {
				reportViolation('CloudRun2 services should be protected from accidental deletion.')
			}
		}
	}
}

export const jobRequireDeletionProtection = {
	name: 'cloudrunv2-job-require-deletion-protection',
	description: "Check that CloudRun2 jobs enable 'deletionProtection'.",
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:cloudrunv2/job:Job') {
			const deletionProtection = args.props.deletionProtection
			if (!deletionProtection) {
				reportViolation('CloudRun2 jobs should be protected from accidental deletion.')
			}
		}
	}
}
