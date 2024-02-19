import * as gcp from '@pulumi/gcp'

const sa = new gcp.serviceaccount.Account('sa', {
	accountId: 'service-account'
})

export const saKey = new gcp.serviceaccount.Key("fail1", {
	serviceAccountId: sa.name,
	publicKeyType: "TYPE_X509_PEM_FILE",
})
