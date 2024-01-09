import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from '@pulumi/policy'

export const disallowContainerRegistry = {
	name: 'container-registry-disallow-container-registry',
	description: 'Check that Container Registry is not used.',
	enforcementLevel: 'advisory' as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === 'gcp:container/registry:Registry') {
			reportViolation('Container Registry is deprecated since May 15, 2023.')
		}
	}
}
