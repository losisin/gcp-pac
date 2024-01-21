import { disallowRsasha1Algorithm } from './disallowRsasha1Algorithm'
import { requireDnssecStateOn } from './requireDnssecStateOn'

export const dnsPolicies = [disallowRsasha1Algorithm, requireDnssecStateOn]
