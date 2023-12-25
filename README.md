# gcp-pac

[![CI](https://github.com/losisin/gcp-pac/actions/workflows/ci.yaml/badge.svg?branch=main)](https://github.com/losisin/gcp-pac/actions/workflows/ci.yaml)
[![Static Badge](https://img.shields.io/badge/license-Apache%20V2-blue.svg)](https://github.com/losisin/gcp-pac/blob/main/LICENSE)
[![NPM version](https://img.shields.io/npm/v/gcp-pac.svg?style=flat)]
<!-- [![NPM total downloads](https://img.shields.io/npm/dt/gcp-pac.svg?style=flat)] -->

GCP Policy as Code (gcp-pac) for your Pulumi typescript apps.

## Installation

```bash
npm install gcp-pac --save-dev
```

## Usage

```bash
pulumi preview --policy-pack ./node_modules/gcp-pac
```

Will output something like this:

```bash
Loading policy packs...

     Type                     Name                  Plan       Info
     pulumi:pulumi:Stack      my-stack             
 ~   └─ gcp:cloudrun:Service  default               update     [diff: ~metadata,template]

Policies:
    ⚠️ gcp-pac@v1.0.0 (local: node_modules/gcp-pac)
        - [advisory]  cloudrun-disallow-public-ingress  (gcp:cloudrun/service:Service: default)
          Check that CloudRun services do not have public ingress set to 'all'.
          CloudRun services should not have public ingress set to 'all'. Use a load balancer instead.
```

Override `enforcementLevel` to `mandatory` to fail the preview if the policy is not met. First, create a `json` file for specific ploicies:

```json
{
  "cloudrun-disallow-public-ingress": "mandatory"
}
```

or, for all policies:

```json
{
  "all": "mandatory"
}
```

Then, run the following command:

```bash
pulumi preview --policy-pack ./node_modules/gcp-pac --policy-pack-config policy.json
```

which will fail the preview if any policy is not met:

```bash
Loading policy packs...

     Type                     Name                  Plan       Info
     pulumi:pulumi:Stack      my-stack             1 error
 ~   └─ gcp:cloudrun:Service  default               update     [diff: ~metadata,template]

Policies:
    ❌ gcp-pac@v1.0.0 (local: node_modules/gcp-pac)
        - [mandatory]  cloudrun-disallow-public-ingress  (gcp:cloudrun/service:Service: default)
          Check that CloudRun services do not have public ingress set to 'all'.
          CloudRun services should not have public ingress set to 'all'. Use a load balancer instead.

Diagnostics:
  pulumi:pulumi:Stack (my-stack):
    error: preview failed
```

For more information, see [Enforcement Leve](https://www.pulumi.com/docs/using-pulumi/crossguard/configuration/#enforcement-level) from Pulumi documentation.

## Issues, Features, Feedback

Your input matters. Feel free to open [issues](https://github.com/losisin/gcp-pac/issues) for bugs, feature requests, or any feedback you may have. Check if a similar issue exists before creating a new one, and please use clear titles and explanations to help understand your point better. Your thoughts help me improve this project!

### How to Contribute

🌟 Thank you for considering contributing to my project! Your efforts are incredibly valuable. To get started:

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -am 'Add: YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Submit a pull request! 🚀
