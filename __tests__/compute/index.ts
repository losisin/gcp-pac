import * as gcp from "@pulumi/gcp";

export const backendService = new gcp.compute.BackendService("fail#1", {
    name: "fail#1",
    loadBalancingScheme: "EXTERNAL"
});
