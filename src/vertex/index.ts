import { requireDatasetCmek } from './requireDatasetCmek'
import { requireMetadataStoreCmek } from './requireMetadataStoreCmek'

export const vertexPolicies = [requireDatasetCmek, requireMetadataStoreCmek]
