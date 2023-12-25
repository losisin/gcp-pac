import * as gcp from "@pulumi/gcp";

export const clodrunServicePass1 = new gcp.cloudrun.Service("pass#1", {
    location: "europe-west1",
    template: {
        spec: {
            containers: [{
                image: "us-docker.pkg.dev/cloudrun/container/hello",
            }],
        },
    }
});

export const clodrunServicePass2 = new gcp.cloudrun.Service("pass#2", {
    location: "europe-west1",
    metadata: {
        annotations: {
            "run.googleapis.com/ingress": "internal-only",
        },
    },
    template: {
        spec: {
            containers: [{
                image: "us-docker.pkg.dev/cloudrun/container/hello",
            }],
        },
    }
});

export const clodrunServiceFail1 = new gcp.cloudrun.Service("fail#1", {
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
            }],
        },
    }
});
