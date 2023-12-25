import * as gcp from "@pulumi/gcp";

export const backendServicePass1 = new gcp.compute.BackendService("pass#1", {
    name: "pass#1",
    securityPolicy: "projects/123456789/global/securityPolicies/foo"
});

export const backendServicePass2 = new gcp.compute.BackendService("pass#2", {
    name: "pass#1",
    loadBalancingScheme: "EXTERNAL",
    securityPolicy: "projects/123456789/global/securityPolicies/foo"
});

export const backendServiceFail1 = new gcp.compute.BackendService("fail#1", {
    name: "fail#1",
    loadBalancingScheme: "EXTERNAL"
});
