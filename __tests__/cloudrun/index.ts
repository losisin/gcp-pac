import * as gcp from "@pulumi/gcp";

export const cloudrunService = new gcp.cloudrun.Service("fail#1", {
    location: "europe-west1",
    metadata: {
        annotations: {
            "run.googleapis.com/ingress": "all",
        },
    },
    template: {
        spec: {
            containers: [{
                image: "us-docker.pkg.dev/cloudrun/container/hello",
                envs: [
                    {
                        name: "FOO",
                        value: "bar",
                    },
                    {
                        name: "SECRET_ENV_VAR",
                        valueFrom: {
                            secretKeyRef: {
                                name: "my-secret",
                                key: "1",
                            },
                        },
                    },
                ],
            }],
        },
    }
});
