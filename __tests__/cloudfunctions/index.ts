import * as gcp from "@pulumi/gcp";

export const cloudfunctionsFunction = new gcp.cloudfunctions.Function("fail#1", {
    name: "my-function",
    runtime: "nodejs16",
    region: "europe-west1",
    triggerHttp: true,
    ingressSettings: "ALLOW_ALL",
    vpcConnector: "my-connector",
    vpcConnectorEgressSettings: "ALL_TRAFFIC",
    secretEnvironmentVariables: [
        {
            key: "SECRET_ENV_VAR",
            secret: "my-secret",
            version: "1",
        }
    ],
});
