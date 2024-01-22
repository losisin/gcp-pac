import * as gcp from '@pulumi/gcp'

export const vertexDataset = new gcp.vertex.AiDataset('fail1', {
	displayName: 'fail1',
	metadataSchemaUri: 'gs://google-cloud-aiplatform/schema/dataset/metadata/image_1.0.0.yaml',
	encryptionSpec: {
		kmsKeyName: ''
	}
})

export const vertexMetadataStore = new gcp.vertex.AiMetadataStore('fail1', {
	encryptionSpec: {
		kmsKeyName: ''
	}
})
