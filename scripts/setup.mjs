import fs from "fs";
import { load, dump } from "js-yaml";

function main() {
    let version = fs.readFileSync("version.txt").toString('utf-8').trim();

    let json = fs.readFileSync("package.json").toString('utf-8').trim();
    let jsonObj = JSON.parse(json);
    jsonObj.scripts = {};
    jsonObj.devDependencies = {};
    jsonObj.version = version;
    fs.writeFileSync("dist/package.json", Buffer.from(JSON.stringify(jsonObj, null, 2), "utf-8") );

    let yaml = load(fs.readFileSync("PulumiPolicy.yaml").toString('utf-8'));
    yaml.version = version;
    fs.writeFileSync("dist/PulumiPolicy.yaml", dump(yaml), "utf-8");

    fs.copyFileSync(".npmignore", "dist/.npmignore");
    fs.copyFileSync("LICENSE", "dist/LICENSE");
}

main();
