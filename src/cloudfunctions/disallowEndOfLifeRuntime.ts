import { ResourceValidationArgs, ReportViolation, EnforcementLevel } from "@pulumi/policy";

export const disallowEndOfLifeRuntime = {
	name: "cloudrunfunctions-function-disallow-end-of-life-runtime",
	description: "Check that CloudFunctions function does not use end-of-life runtime.",
	enforcementLevel: "advisory" as EnforcementLevel,
	validateResource: (args: ResourceValidationArgs, reportViolation: ReportViolation) => {
		if (args.type === "gcp:cloudfunctions/function:Function") {
			const message = "CloudFunctions function should use runtime with active or security support."
            const runtime = args.props.runtime;
			const match = runtime.match(/^([a-z]+)(\d+)$/i);
			if (match) {
				let lang = match[1];
				let version = match[2];
				switch (lang) {
					case "nodejs": // https://endoflife.date/nodejs
						if (version < 18) {
							reportViolation(message);
						}
						break;
					case "python": // https://endoflife.date/python
						if (version < 38) {
							reportViolation(message);
						}
						break;
					case "go": // https://endoflife.date/go
						if (version < 120) {
							reportViolation(message);
						}
						break;
					case "java": // https://endoflife.date/openjdk-builds-from-oracle
						if (version < 21) {
							reportViolation(message);
						}
						break;
					case "ruby": // https://endoflife.date/ruby
						if (version < 31) {
							reportViolation(message);
						}
						break;
					case "php":
						if (version < 81) { // https://endoflife.date/php
							reportViolation(message);
						}
						break;
					case "dotnet":
						if (version < 6) { // https://endoflife.date/dotnet
							reportViolation(message);
						}
						break;
				}
			}
		}
	},
}
