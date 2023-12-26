import * as gcp from "@pulumi/gcp";

export const clodrunv2ServicePass1 = new gcp.cloudrunv2.Service("pass#1", {
    location: "europe-west1",
    template: {
        containers: [{
            image: "us-docker.pkg.dev/cloudrun/container/hello",
        }],
    },
});

export const clodrunv2ServicePass2 = new gcp.cloudrunv2.Service("pass#2", {
    location: "europe-west1",
    ingress: "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER",
    template: {
        containers: [{
            image: "us-docker.pkg.dev/cloudrun/container/hello",
        }],
    },
});

export const clodrunv2ServiceFail1 = new gcp.cloudrunv2.Service("fail#1", {
    location: "europe-west1",
    ingress: "INGRESS_TRAFFIC_ALL",
    template: {
        containers: [{
            image: "us-docker.pkg.dev/cloudrun/container/hello",
        }],
    },
});